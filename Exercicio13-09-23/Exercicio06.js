function Iniciar() {
    // Peça ao usuário para digitar o primeiro numero
    var num1 = Number(prompt("Digite o primeiro numero: "));

    // Peça ao usuário para digitar o Segundo numero
    var num2 = Number(prompt("Digite o Segundo numero: "));

    // Peça ao usuário para digitar o Terceiro numero
    var num3 = Number(prompt("Digite o Terceiro numero: "));

    // Verifica se os 3 numeros são iguais.
    if (num1 == num2 && num2 == num3) {
        alert("Os tres numeros são iguais!")
        return;
    }

    // Metodo para mostrar qual deles é o maior
    alert("O maior numero entre os tres é: " + Math.max(num1, num2, num3));

    // Metodo para mostrar qual deles é o menor
    alert("O menor numero entre os tres é: " + Math.min(num1, num2, num3));
}
