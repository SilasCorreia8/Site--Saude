const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoElemento = document.getElementById('resultado');
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultadoElemento.textContent = 'Por favor, insira valores válidos para peso e altura.';
      return;
    }
  
    const imc = peso / (altura * altura);
  
    let categoria;
    if (imc < 18.5) {
      categoria = 'abaixo do peso';
    } else if (imc < 25) {
      categoria = 'peso normal';
    } else if (imc < 30) {
      categoria = 'sobrepeso';
    } else {
      categoria = 'obesidade';
    }
  
    resultadoElemento.textContent = `Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}`;
  }