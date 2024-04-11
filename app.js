// Importa os módulos necessários
const express = require('express'); // Framework Express para Node.js
const axios = require('axios'); // Cliente HTTP para fazer requisições
const path = require('path'); // Módulo Path para lidar com caminhos de arquivos
const cors = require('cors'); // Middleware CORS para permitir requisições entre origens
const config = require('./config.json'); // Arquivo de configuração contendo a chave da API
const apikey = config.apikey; // Extrai a chave da API do arquivo de configuração

// Cria a aplicação Express
const app = express();

// Configura o servidor para ouvir na porta 3000
app.listen(3000);

// Habilita o middleware CORS para permitir requisições entre origens
app.use(cors());

// Middleware para analisar corpos de requisição JSON
app.use(express.json());

// Middleware para servir arquivos estáticos do diretório 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Objeto que mapeia descrições de clima para suas traduções em português
const traducaoClima = {
    // Mapeamento de descrições de clima e suas traduções
};

// Define um endpoint GET para buscar dados meteorológicos para uma cidade específica
app.get('/climatempo/:cidade', async (req, res) => {
    // Extrai o nome da cidade dos parâmetros da requisição
    const city = req.params.cidade;

    try {
        // Faz uma requisição GET para a API do OpenWeatherMap para buscar dados meteorológicos da cidade especificada
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

        // Se o status da resposta for 200 (OK)
        if (response.status === 200) {
            //  a descrição do Traduzclima para português ou usa a descrição original se a tradução não estiver disponível
            const clima = traducaoClima[response.data.weather[0].description] || response.data.weather[0].description;

            // Constrói um objeto contendo os dados meteorológicos relevantes
            const weatherData = {
                Temperatura: response.data.main.temp,
                Umidade: response.data.main.humidity,
                VelocidadeDoVento: response.data.wind.speed,
                Clima: clima
            };

            // Envia os dados meteorológicos como resposta
            res.send(weatherData);
        } else {
            // Se o status da resposta não for 200, envia uma resposta de erro com o código de status apropriado
            res.status(response.status).send({ erro: 'Erro ao obter dados meteorológicos' });
        }
    } catch (error) {
        // Se ocorrer algum erro durante o processo, envia uma resposta de erro genérica com o código de status 500
        res.status(500).send({ erro: 'Erro ao obter dados metereológicos', error });
    }
});
