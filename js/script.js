const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]

function setImage(id) {
	const images=['geralt_livro.jpg', 'geralt_TW1.jpg', 'geralt_TW2.png', 'geralt_TW3.png', 'geralt_netflix.png']
	let imgAtual=document.getElementById('imgAtual')
 
	imgAtual.src=`../imagens/${images[id]}`
}


function handleButtonContato(){
	window.alert('Obrigado pelo contato!');

	window.location.href='home.html'
}

function handleRefreshDate(){
	const date=new Date()
	const spanDay = document.getElementById('span-date');

	spanDay.innerHTML=`${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`
}

handleRefreshDate()