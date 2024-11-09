// const menu = {
//     seletor: '.principal',
// }

// console.log(menu.seletor.toUpperCase())

// _____________________________________________________

// const upperName = (name) => {
//     return name.toUpperCase();
// }

// const lowerName = () => {
// }

// const upperName = (name) => name.toUpperCase();

// console.log(upperName('vitor'));

// function handleMouse ({ clientX, clientY}){
//     console.log(event.clientX)

//     const y = event.clientY;
//     const x = event.clientX;
//     console.log('x:',x,'y:',y)

//     const { clientX, clientY } = event;
//     console.log(clientX, clientY);
// }

// desestruturar arrays
// const frutas = [
//     'banana',
//     'uva',
// ]

// const [fruta1, fruta2] = frutas;

// console.log(frutas);
// console.log(fruta1);
// console.log(fruta2);

// const useQuadrado = [
//     4,
//     function (lado) {
//         return 4*lado;
//     },
// ];

// const [lados, perimetro] = useQuadrado

// console.log(lados)
// console.log(perimetro(10))

// document.addEventListener('click', handleMouse)

// _______________________________________

// function showList(empresa, clientes) {
//     clientes.forEach(cliente => {
//         console.log(cliente, empresa)
//     })
// }

// showList('Google', ['Vitor', 'Henrique'])

// function showList(empresa, ...clientes) {
//     clientes.forEach(cliente => {
//         console.log(cliente, empresa)
//     })
// }

// showList('Google', 'Vitor', 'Henrique', 'Rafael')

// const numeros = [10, 5, 20];
// const maior = Math.max(...numeros);
// console.log(maior);

// const numeros2 = [...numeros, 35, 25, 12, 24]
// console.log(numeros2)

// const carro = {
//     cor: 'azul',
//     portas: '4' 
// }

// carro.ano = 2020
// console.log(carro)

// carroAno = {...carro, ano: 2008};

// console.log(carro)
// console.log(carroAno)

// _________________________________________

// import quadrado from "./quadrado.js";
// import numeroAleatorio from "./numeroAleatorio.js";

// console.log(areaQuadrado(5))
// console.log(perimetroQuadrado(5))

// console.log(quadrado.areaQuadrado(5))
// console.log(quadrado.perimetroQuadrado(5))

// console.log(numeroAleatorio())

// fetch('https://pokeapi.co/api/v2/pokemon').then((response) => response.json()).then(json => {
//     console.log(json)
// });


// async function fetchPokemon(url) {
//     const response = await fetch(url);
//     const json = await response.json()
//     return json;
// }

// const pokemon = fetchPokemon('https://pokeapi.co/api/v2/pokemon')


// const precos = [
//     'Credito',
//     'R$ 200',
//     'R$ 400',
//     'Contas pagar',
//     'R$ 300',
//     'R$ 400',
//     'Meus dados',
// ]

// const precosFiltro = precos.filter((p) => p.includes('R$'));
// const precosNumeros = precosFiltro.map((preco) => Number(preco.replace('R$ ', ''))  )

// console.log(precosNumeros   )


// ______________________________________

// const grupoA = 100;
// const grupoB = 200;

// if(grupoA > grupoB){
//     console.log('Grupo A ganhou!');
// } else {
//     console.log('Grupo B ganhou!');
// }


// const vencedor = grupoA > grupoB ? 'Grupo A venceu!' : 'Grupo B venceu!'
// console.log(vencedor)

// const active = true;
// const button = active && 'Botão está ativo!'

// console.log(button)