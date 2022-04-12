var numeroSorteado = parseInt(Math.random() * 11);

var tentativa = 3;
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSorteado) {
    elementoResultado.innerHTML = "Você acertou o número secreto. Parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "O número digitado não está entre as opções disponíveis. Escolha um número entre 0 e 10.";
  } else if (tentativa > 0 && chute < numeroSorteado) {
    tentativa--;
    elementoResultado.innerHTML =
      "Você não acertou. Seu chute é menor que o número secreto. Tente outra vez.";
  } else {
    tentativa--;
    elementoResultado.innerHTML =
      "Você não acertou. Seu chute é maior que o número secreto. Tente outra vez.";
  }
  if (tentativa == 0) {
    elementoResultado.innerHTML =
      "Acabaram as tentativas. Infelizmente você não acertou. O número secreto é " +
      numeroSorteado;
  }
}


