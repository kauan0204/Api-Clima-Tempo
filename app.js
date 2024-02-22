const express = require ('express');
const axios = require ('axios');
const path = require ('path');
const cors = require ('cors');
const config = require ('./config.json');
const apikey = config.apikey;

const app = express();
app.listen(3000);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(_dirname, 'public')));

const traducaoClima = {
    'few clouds':'Poucas nuvens',
    'scattered clouds': 'nuvens dispersas'
}


app.get("/climatempo/:cidade", async (req, res) => {

    const cidade = req.params.cidade;
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?q=${cidade}&appid=${APIkey}&units-metric`)
        if(response.status== 200) {

            const clima = traducaoClima[response.data.weather[0].description] 
            || response.data.weather[0].description

            const weatherData = {
                Temperatura: response.data.main.temp,
                Umimdade: response.data.main.humidity,
                VelocidadeDoVento: response.data.wind.speed,
                Clima: clima
            };

            res.send(weatherData);
        } else {
            res.status(response.status).send({erro: 'Erro ao obter dados meteoro'});
        }
    } catch (error){
        res.status(500).send({erro:'Erro ao obter dados meterológicos', error});
    }

});
