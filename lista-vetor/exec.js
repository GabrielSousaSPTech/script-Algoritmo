function somarElementos(listaNumeros = []) {

	if(listaNumeros.length == 0) {
		return 0
	}

	var somatoria = 0

	for(var contagem = 0; contagem <listaNumeros.length; contagem++){
		somatoria += listaNumeros[contagem]
	}
	return somatoria
	
}


console.log(somarElementos([1,2,3]))
console.log(somarElementos([4,5,6]))