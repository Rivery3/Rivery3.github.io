document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectroAll('.language-button');
	buttons.forEach(button => {
		button.addEventListener('click', function(){
			const language = this.getAttribute('data-lang');
			fetchTranslations(language);
		});
	});
	
});

function fetchTranslations(lang) {
    fetch('idiomas.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('saludo').innerText = data[lang].saludo;
            document.getElementById('bienvenida').innerText = data[lang].bienvenida;
        })
        .catch(error => console.error('Error:', error));
}
