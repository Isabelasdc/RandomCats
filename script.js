const urlApi = 'https://api.thecatapi.com/v1/images/search';

async function ImagemGato() {
    try {
      
        const resposta = await fetch(urlApi);
      
        if (!resposta.ok) {
            throw new Error('A solicitação para a API falhou');
        }
        
        const dados = await resposta.json();
       
        const urlImagem = dados[0].url;
       
        document.getElementById('cat-image').src = urlImagem;
    
        document.getElementById('error-message').textContent = '';
    } catch (erro) {
        document.getElementById('error-message').textContent = 'Não foi possível obter uma imagem del gatito. Tente novamente mais tarde :).';
        console.error('Houve um erro com a operação fetch:', erro);
    }
}


ImagemGato();