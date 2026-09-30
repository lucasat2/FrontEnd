document.getElementById('form-lead').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    
    // Substitua o botão por uma mensagem de "Enviando..."
    const btnSubmit = form.querySelector('button[type="submit"]');
    const textoOriginal = btnSubmit.textContent;
    btnSubmit.textContent = 'Enviando...';
    btnSubmit.disabled = true;

    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxvI8OYAyL5PxD3fA1kSMGng2fyrKlW-9fJJKZ7zWgZLqLVPTWiYOxaUxvfN-iqKFXD/exec';

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            alert('Cadastro realizado com sucesso!');
            form.reset(); 
            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
        })
        .catch(error => {
            alert('Erro ao enviar o cadastro. Tente novamente.');
            btnSubmit.textContent = textoOriginal;
            btnSubmit.disabled = false;
        });
});