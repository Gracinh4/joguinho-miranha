const avanca = document.querySelectorAll('.btn-prox');

avanca.forEach(button => {
    button.addEventListener('click',function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-prox');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
        
    })
})








