const arr = [1,2,3,6,8,9]

const newArr = arr.map(function(item){
    return item * 2;
})
console.log(newArr)

const soma1 = arr.reduce(function(total, next){
    return total + next;
} )
console.log(soma)

const filter = arr.filter(function(item){
    return item % 2 === 0;
})
console.log(filter)

const find = arr.filter(item => item === 3)  //funcão reduzida em relacão as anteriores
console.log(find)

const teste = () => {  return {nome:'Lucas'}}
console.log(teste())

function soma(a=2,b=3){
    return a+b;
}
console.log(soma(3))

// //Classes com herança

// class List{
//     constructor(){
//         this.data = []
//     }
    
//     add(nome) {
//         this.data.push(nome);
//         console.log(this.data);

//     }
// }

// class ToList extends List{
//     constructor() {
//         super();
//         this.usuario = 'Lucas';
//     } 

//     getUsuario(){
//         console.log(this.usuario);
//     }

//     static soma(a,b){
//         return a+b;
//         //return this.usuario;
//     }
// }

// //instancia a classe

// // const tolist = new ToList()

// //adiciona ao array data a string "adicionei" cada vez que clica no botao e chama o metodo getUsuario

// // document.getElementById('novotodo').onclick = function () {
// //         tolist.add('Joao');
// //         tolist.getUsuario();
// // }


// //chama o metodo estático

// //console.log(ToList.soma(1,2))

// //var nome = "Lucas"; //A var pode alterar receber o nome, já o cost não aceita alteracão
// const nome = {primeiro_nome: "Lucas"}

// nome.primeiro_nome = "Joao" //Utilizando esse método da pra alterar o nome

// console.log(nome);

// function teste(x){
//     let y = 4
//     if(x > 2){
//         y = 6
//         console.log(x,y)
//     }

//     else{
//         console.log(y)  //testando um else pra ver se eu ainda sei
//     }
// }

// console.log(teste(10))
// console.log(teste(1))
// //console.log(teste(y)) // o Y só está visivel dentro do escopo da funcao "Teste"



