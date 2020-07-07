//inicio script para fixar cabeçalho
function fixaCabecalho(){
    var cabecalho = document.querySelector('.cabecalhoAux');
    var cabecalhoEspaco = document.querySelector('.cabecalhoEspaco');
	var cabecalhoOffset = cabecalho.offsetTop;//retorna a medida da distancia do elemento em relação ao topo

	function verificaCabecalho() {
		var scrollTop = window.scrollY;
		var cabecalhoAltura = cabecalho.offsetHeight;

		if(scrollTop >= cabecalhoOffset) {
			// rolagem da página passou do elemento, vamos fixá-lo
			cabecalho.classList.add('cabecalhoAuxFixo');
			// ativa cabecalho-espaco para ocupar o espaço perdido
			cabecalhoEspaco.style.height = cabecalhoAltura + 'px';
		} else {
			// retira a classe adicional do elemento
			cabecalho.classList.remove('cabecalhoAuxFixo');
			// retira a altura do cabecalho-espaco
			cabecalhoEspaco.style.height = 0;
		}
	}
	window.addEventListener('load', verificaCabecalho);//ao carregar chama a função fixa
	window.addEventListener('scroll', verificaCabecalho);//quando ocorre o evento de scroll
	window.addEventListener('resize', verificaCabecalho);//quando ocorre o evento de resize
}

window.addEventListener('load', fixaCabecalho);//ao carregar chama a função fixa

//fim script de fixar cabeçalho