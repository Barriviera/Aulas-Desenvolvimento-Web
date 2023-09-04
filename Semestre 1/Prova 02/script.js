function calcular() {
// Obtendo os valores dos inputs
var a = parseFloat(document.getElementById('a').value);
var b = parseFloat(document.getElementById('b').value);
var c = parseFloat(document.getElementById('c').value);

// Calculando x e y
var x = Math.log10(a + b);
var y = Math.log10(c + a);

// Exibindo os resultados
document.getElementById('x').innerText = 'x: ' + x.toFixed(2);
document.getElementById('y').innerText = 'y: ' + y.toFixed(2);
}