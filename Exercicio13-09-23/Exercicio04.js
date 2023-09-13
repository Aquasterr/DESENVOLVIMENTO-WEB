// Peça ao usuário para digitar a Primeira nota
let n1 = prompt("Digite a primeira nota: ");

// Peça ao usuário para digitar a Segunda nota
let n2 = prompt("Digite a Segunda nota: ");

// Peça ao usuário para digitar a Terceira nota
let n3 = prompt("Digite a Terceira nota: ");

// Passa os valores das variaveis pra int.
nota1 = parseInt(n1 , 10)
nota2 = parseInt(n2 , 10)
nota3 = parseInt(n3 , 10)

// Calcula a Media e mostra ao usuario.
let media = ((nota1 + nota2 + nota3) / 3);
alert("A media do aluno é: " + media);