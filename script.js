// const bool1 = false
// const bool2 = true
// const bool3 = false

// if (bool1) {
//   // deve ser sempre verdadeira, pro bloco ser executado
//   // entra se for true
//   alert('ENTREI NO IF')
// } else {
//   // entra se for false
//   alert('entrei no else')
// }

// if (bool1 === bool2) {
//   alert('1 e 2 SAO IGUAIS!!')
// } else if (bool2 === bool3) {
//   alert('2 e 3 SAO IGUAIS!!')
// } else if (bool1 === bool3) {
//   alert('1 e 3 SAO IGUAIS!!')
// } else {
//   //nenhuma foi atendida, ai o else é executado
//   alert('Nenhum das condicóes foi atendida!!')
// }

//const idade = 61

// if (idade >= 60) {
//   alert('O voto é facultativo')
// } else if (idade >= 16 && idade < 18) {
//   alert('O voto é facultativo')
// } else if (idade >= 18) {
//   alert('Pode e deve emitir o titulo')
// } else {
//   alert(' Nao pode emitir o titulo')
// }

// if (idade >= 60 || (idade >= 16 && idade < 18)) {
//   alert('O voto é facultativo')
//   // uma logica doida
// } else if (idade >= 18) {
//   alert('Pode e deve emitir o titulo')
// } else {
//   alert(' Nao pode emitir o titulo')

//Exercicio de fixação
const media = 10 

if( media>=5 ){
    alert("Você foi aprovado.")
} else if  (media >= 3) { 
    alert("Você está de Recuperação")    
} else if (media < 3) {
    alert("Você foi reprovado.")
} else {
    alert('Dado inválido')
}