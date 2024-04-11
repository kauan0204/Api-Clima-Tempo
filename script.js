// Função para definir o fundo como neblina
function neblina() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/neblina.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como sol
function sol() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/sun.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como chuva leve
function chuvaleve() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/chuvaleve.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como banho de chuva
function banhodechuva() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/banhodechuva.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como nublado
function nublado() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/nublado.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como nuvens separadas
function nuvensseparadas() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/nuvensseparadas.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como neve leve
function neveleve() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/neve.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para definir o fundo como tempestade
function tempestade() {
    var body = document.querySelector('body'); // Seleciona a tag body
    body.style.backgroundImage = 'url("./gif/tempestade.gif")'; // Define a imagem de fundo
    body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o fundo
    body.style.backgroundRepeat = "no-repeat"; // Evita que a imagem se repita
}

// Função para capitalizar a primeira letra de uma string
function primeiraLetraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Faz uma requisisão a api, pedindo as infos da cidade
document.getElementById('formclima').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém as informações da cidade
    const city = document.getElementById('cityInput').value;

    // Faz uma pedido para o servidor Node.js para obter os dados meteorológicos da cidade
    fetch(`http://localhost:3000/climatempo/${city}`)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            // Obtém o elemento HTML para exibir o resultado
            const tempoResult = document.getElementById('climaResult');

            // Se os dados meteorológicos foram obtidos com sucesso
            if (data.Temperatura) {
                // Atualiza os elementos HTML com os dados meteorológicos
                document.getElementById('city').textContent = primeiraLetraMaiuscula(city);
                document.getElementById('temperatura').textContent = `${data.Temperatura}°C`;
                document.getElementById('umidade').textContent = `${data.Umidade}%`;
                document.getElementById('vento').textContent = `${data.VelocidadeDoVento}m/s`;
                document.getElementById('descricao').textContent =`${data.Clima}`;

                // Exibe o resultado e oculta o formulário de busca
                document.getElementById('climaResult').style.display = 'flex';
                document.getElementById('descricao1').style.display = 'flex';
                document.getElementById('lupa').style.display = 'flex';
                document.getElementById('formclima').style.display = 'none';

                // Define os ícones dos elementos
                const temperaturaIcon = document.getElementById('temperaturaIcon');
                const umidadeIcon = document.getElementById('umidadeIcon');
                const ventoIcon = document.getElementById('ventoIcon');
                const descricaoIcon = document.getElementById('descricaoIcon');

                // Define as URLs dos ícones
                cityIcon.src = "./icones/cidade.png";
                temperaturaIcon.src = "./icones/termometro.png";
                umidadeIcon.src = "./icones/umidade.png";
                ventoIcon.src = "./icones/vento2.png";
                descricaoIcon.src = "./icones/clima.png";

                // Define o fundo de acordo com a descrição do clima
                if (data.Clima == 'ceu limpo') {
                    sol();
                } else if (data.Clima == 'Nublado' || data.Clima == 'muitas nuvens') {
                    nublado();
                } else if (data.Clima == 'nuvens separadas' || data.Clima == 'nuvens dispersas' || data.Clima == 'poucas nuvens' || data.Clima == 'Nuvens nubladas'){
                    nuvensseparadas();
                } else if (data.Clima == 'leve chuva' || data.Clima == 'garoa leve' || data.Clima == 'chuvisco de baixa intensidade' || data.Clima == 'chuvisco' || data.Clima == 'chuva e garoa' || data.Clima == 'chuva leve') {
                    chuvaleve();
                } else if (data.Clima == 'neblina' || data.Clima == 'fumaça' || data.Clima == 'névoa' || data.Clima == 'poeira' || data.Clima == 'areia' || data.Clima == 'ventania') {
                    neblina();
                } else if (data.Clima == 'banho de chuva' || data.Clima == 'chuva media' || data.Clima == 'chuva moderada' || data.Clima == 'banho de chuva irregular' || data.Clima == 'chuvisco forte' || data.Clima == 'chuva forte com garoa' || data.Clima == 'chuvisco de alta intensidade') {
                    banhodechuva();
                } else if (data.Clima == 'tempestade' || data.Clima == 'forte tempestade' || data.Clima == 'tempestade irregular' || data.Clima == 'trovoada com chuva fraca' || data.Clima == 'trovoada com chuva' || data.Clima == 'trovoada com chuva forte' || data.Clima == 'trovoada leve' || data.Clima == 'trovoada' || data.Clima == 'trovoada com leve garoa' || data.Clima == 'trovoada com garoa' || data.Clima == 'trovoada com forte garoa') {
                    tempestade();
                }

            } else {
                tempoResult.innerHTML = "Erro ao obter dados metereologicos";
            }
        })
        .catch((error) => console.error("Erro ao obter dados"));
});