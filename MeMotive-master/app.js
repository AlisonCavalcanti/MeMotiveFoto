function init(SeletorFrase, seletorAutor, seletorBtn, selectorImg) {
    // Selecionando elementos do DOM
    const frase = document.querySelector(SeletorFrase);
    const autor = document.querySelector(seletorAutor);
    const btn = document.querySelector(seletorBtn);
    const image = document.querySelector(selectorImg);
    const body = document.querySelector('body');

    // Tratativa de erro
    if (frase && autor && btn && image) {
        // Função Assíncrona puxando a frase da API
        async function activeApp() {
            try {
                // Faz um fetch na URL
                const dadosResponse = await fetch('./phrases.json');
                // Aguarda o retorno do Fetch e transforma em JSON
                const dadosJSON = await dadosResponse.json();
                // Puxando as frases de forma aleatória
                const aleatorio = dadosJSON[Math.floor(Math.random() * dadosJSON.length)];

                // Insere os dados no DOM
                frase.innerText = aleatorio.quote;
                autor.innerText = aleatorio.author;
                image.src = aleatorio.image; // Define o src da imagem

                return gradientColor();
            } catch (erro) {
                console.log(erro);
            }
        }

        async function gradientColor() {
            // Gradient Colors API
            try {
                // Faz um fetch na URL
                const colorsResponse = await fetch('./colors.json');
                // Aguarda o retorno do Fetch e transforma em JSON
                const colorsJSON = await colorsResponse.json();
                // Puxando as cores de forma aleatória
                const aleatorioColors = colorsJSON[Math.floor(Math.random() * colorsJSON.length)].color;

                // Adicionado cor ao Body
                body.style.background = aleatorioColors;
            } catch (erro) {
                console.log(erro);
            }
        }

        // Evento do botão
        btn.addEventListener('click', activeApp);

        // Ativando a função quando entra no site
        activeApp();
    }
}

// Chamando a função geral para iniciar o código
init('.frase', '.autor', '.btn-novo', '#image');
