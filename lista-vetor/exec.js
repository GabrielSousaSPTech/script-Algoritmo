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

console.log("Exercício 01 - "+somarElementos([4,5,6]))

function maiorNumero(listaNumeros = []){
	var maiorNumero = 0
	for( var contagem = 0; contagem <listaNumeros.length; contagem ++){
		if(listaNumeros[contagem] > maiorNumero){
			maiorNumero = listaNumeros[contagem]
		}
	}

	return maiorNumero

}

console.log("Exercício 02 - "+maiorNumero([10, 13, 2, 20, 1]))

function menorNumero(listaNumeros = []){
	var menorNumero = listaNumeros [0]
	for( var contagem = 1; contagem <listaNumeros.length; contagem ++){
		if(listaNumeros[contagem] < menorNumero){
			menorNumero = listaNumeros[contagem]
		}
	}

	return menorNumero
}

console.log("Exercício 03 - "+menorNumero([10, 13, 2, 20, 1]))

function mediaDosValores (listaNumeros = []){
	var media = 0

	for (contagem = 0 ; contagem < listaNumeros.length; contagem ++){
		media += listaNumeros[contagem]
	}

	return media / listaNumeros.length
}

console.log("Exercício 04 - "+mediaDosValores([10, 10, 7, 8]))

function verificacaoDosPares (listaNumeros = []){
	const listaNumerosPares = []
	for (contagem = 0 ; contagem < listaNumeros.length; contagem ++){
		if(listaNumeros[contagem] % 2 == 0){
			listaNumerosPares.push(listaNumeros[contagem])
		}
	}

	return listaNumerosPares
}

console.log('Exercício 05 - ' + verificacaoDosPares([0,1,2,3,4,5,6,7,8,9,10]))

function verificacaoDosImpars (listaNumeros = []){
	const listaNumerosImpar = []
	for (contagem = 0 ; contagem < listaNumeros.length; contagem ++){
		if(listaNumeros[contagem] % 2 != 0){
			listaNumerosImpar.push(listaNumeros[contagem])
		}
	}

	return listaNumerosImpar
}
console.log('Exercício 06 - ' + verificacaoDosImpars([0,1,2,3,4,5,6,7,8,9,10]))

