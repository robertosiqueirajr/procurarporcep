function fnSearchCEP(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
     .then((response) => response.json())
     .then((returnJson) => {
        document.getElementById('rua').value = returnJson.logradouro;
        document.getElementById('cidade').value = returnJson.localidade;
        document.getElementById('bairro').value = returnJson.bairro;
        document.getElementById('numero').focus();
    });
    
}