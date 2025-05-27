let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")

const soma  = document.getElementById('soma')
const sub = document.getElementById('sub')
const multi = document.getElementById('multi')
const divi = document.getElementById('divi')
const raiz = document.getElementById('raiz')


soma.addEventListener('click', ()=> {
    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);
    let result = valor1 + valor2;

    window.alert(`o Resultado de ${valor1} + ${valor2} = ${result}`)

})
sub.addEventListener('click', ()=> {
    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);
    let result = valor1 - valor2;

    window.alert(`o Resultado de ${valor1} - ${valor2} = ${result}`)

})
multi.addEventListener('click', ()=> {
    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);
    let result = valor1 * valor2;

    window.alert(`o Resultado de ${valor1} x ${valor2} = ${result}`)

})
divi.addEventListener('click', ()=> {


    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);
    let result = valor1 / valor2;
    if (valor2 === 0) {
          window.alert(`Não pode ser zero`);

    } else {
          window.alert(`o Resultado de ${valor1} / ${valor2} = ${result}`)
    }
})


raiz.addEventListener('click', () => {
  const valor = Number(n1.value);

  if (valor < 0) {
    alert("Não existe raiz quadrada real de número negativo!");
  } else {
    const resultado = Math.sqrt(valor);
    alert(`A raiz quadrada de ${valor} é ${resultado}`);
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}
