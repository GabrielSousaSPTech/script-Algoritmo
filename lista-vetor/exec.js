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

function quantidadePares (listaNumeros =[]) {
	var quantidadePar = 0
	for( var posicao = 0;
		posicao <listaNumeros.length;
		posicao ++
	){

		if(listaNumeros[posicao] %2 ==0){
			
			quantidadePar ++
		}
	}
		return quantidadePar;
}
console.log('Exercício 07 - ' + quantidadePares([0,1,2,3,4,5,6,7,8,9,10]))

function quantidadeImpar (listaNumeros =[]) {
	var qtdImpar = 0
	for( var posicao = 0;
		posicao <listaNumeros.length;
		posicao ++
	){

		if(listaNumeros[posicao] %2 !=0){
			
			qtdImpar ++
		}
	}
		return qtdImpar;
}
console.log('Exercício 08 - ' + quantidadeImpar([0,1,2,3,4,5,6,7,8,9,10]))

function quantidadeNumero (listaNumeros = [], numeroSelecionado) {
	var quantidadeNumero = 0

	for(var posicao = 0; posicao<listaNumeros.length; posicao++){
		if(listaNumeros[posicao] == numeroSelecionado){
			quantidadeNumero++
		}
	}
	
	return quantidadeNumero
}

console.log('Exercício 09 - ' + quantidadeNumero([0,0,0,1,1], 0))
console.log('Exercício 09 - ' + quantidadeNumero([0,0,0,1,1], 1))
console.log('Exercício 09 - ' + quantidadeNumero([0,0,0,1,1], 2))


function filtragemNumeroPositivo (listaNumeros = []) {
	var listaPositiva=0
	for(var posicao = 0; posicao<listaNumeros.length; posicao++){
		if(listaNumeros[posicao]>=0){
			listaPositiva++
		}
	}

	return listaPositiva == listaNumeros.length
}

console.log('Exercício 10 - ' + filtragemNumeroPositivo([0, 50, 8, 7 ,6]))
console.log('Exercício 10 - ' + filtragemNumeroPositivo([-1, 50, 8, 7 ,6]))

function somarVetores (listaNumeros1, listaNumeros2 ){
	var vetorSomado = []
	if(listaNumeros1.length != listaNumeros2.length){
		return "Vetores de tamanho diferentes"
	}

		for (var posicao =0; posicao <listaNumeros1.length; posicao++){
			vetorSomado.push(listaNumeros1[posicao] + listaNumeros2[posicao])
		}
		return vetorSomado
		
}
	
console.log('Exercício 11 - '+somarVetores([1,2,3,4], [4,3,2,1]))
console.log('Exercício 11 - '+somarVetores([1,2,3,4], [4,3,2,1,1]))

function filtragemNumeroCrescente (listaNumeros = []) {
	var listaCrescente = true
	for( posicao = 0; posicao <listaNumeros.length; posicao++){

		if(isNaN(Number(listaNumeros[posicao]))) {
			return 'Digite apenas números'
		}

		if(listaNumeros[posicao]>listaNumeros[posicao+1]){
			listaCrescente = false
		}
	}
	return listaCrescente

	
}


console.log('Exercício 12 - '+filtragemNumeroCrescente([1,2,3,4]))
console.log('Exercício 12 - '+filtragemNumeroCrescente([1,2,3,2]))
console.log('Exercício 12 - '+filtragemNumeroCrescente(['batata',2,3,2]))
