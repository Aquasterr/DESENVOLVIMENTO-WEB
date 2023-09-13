// Peça ao usuário para digitar uma idade.
var idade = Number(prompt("Digite sua idade: "));

if (idade >= 18 && idade <= 67) {
    alert("Você pode doar sangue!")
}
else
{
    alert("Você não pode doar sangue")
}