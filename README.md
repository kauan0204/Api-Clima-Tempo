# APIclima

# App.js 
- linha 1-7
Importa os módulos necessários.
- linha 10-22
cria a aplicação express, trata das requisões pedidas no começo do codigo.
- linha 25-27
mapeia as traduçoes do clima para portugues.
- linha 29-31
busca dados meteriologicos para uma cidade especifica
- linha 30-31
usa o link para buscar os dados de uma cidade espesifica 
- linha 40
a descrição do Traduzclima para português ou usa a descrição original se a tradução não estiver disponível
- linha 43-49
contem os dados prncipais da cidade
- linha 52
Envia os dados meteorológicos como resposta
- linha 55
Se o status da resposta não for 200, envia uma resposta de erro com o código de status apropriado
- linha 59-62
Se ocorrer algum erro durante o processo, envia uma resposta de erro genérica com o código de status 500

# script.js
- linha 1-63
cria os climas como função e denomina em cada um: tag body, define a imagem de fundo, ajusta o tamanho e evita que a imagem se repita
- linha 65-68
deixa a primeira letra em caixa alta
- linha 70-72
 Adiciona um evento de submissão ao formulário
- linha 74-76
Obtém as informações da cidade
- linha 77-80
Faz uma pedido para o servidor Node.js para obter os dados meteorológicos da cidade
- linha 85-91
atualiza as informaçoes metereologicas
- linha 94-97
tira o formulario e mostra as informaçoes
- linha 99-103
Define os ícones dos elementos
- linha 106-110
Define os caminhos dos ícones
- linha 113-127
Define o fundo de acordo com a descrição do clima
- linha 129-134
se não bater com nenhuma das informações acima aparecera mensagens de erro
