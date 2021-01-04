addEventListener('DOMContentLoaded', () =>{
	const contadores = document.querySelectorAll('.contador_cantidad');
	const velocidad = 1500;


	const animarContadores = () =>{
		for(const contador of contadores){
			const actualizarContador = () =>{
				let cantidad_maxima = +contador.dataset.cantidadTotal,
				valor_actual = +contador.innerText,
				incremento = cantidad_maxima / velocidad


				if(valor_actual < cantidad_maxima){
					contador.innerText = Math.ceil(valor_actual + incremento)
					setTimeout(actualizarContador, 5)
				}else{
					contador.innerText = cantidad_maxima
				}
			}
			actualizarContador()
		}
	}
	const mostrarContadores = elementos => {
		elementos.forEach(elemento => {
			if(elemento.isIntersecting){
				elemento.target.classList.add('animar')
				elemento.target.classList.remove('ocultar')
				setTimeout(animarContadores, 300)
			}
		});
	}


	const observer = new IntersectionObserver(mostrarContadores,{
		threshold: 0.75
	})

	const elementosHTML = document.querySelectorAll('.contador')
	elementosHTML.forEach(elementoHTML => {
		observer.observe(elementoHTML)
	})

});