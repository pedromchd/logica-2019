//OPERADORES_RELACIONAIS
R = 10 //10
R == 10 //true

5 == 10 //false
5 != 10 //true

"'d'erik" > "'t'hiago" //false //ordem_alfabetica
"a" < "A" //false //tabela_ASCII
"1" < "a" //true //1Aa

"3" == 3 //true //valor
"3" === 3 //false //valor_tipo

"3" != 3 //false //valor
"3" !== 3 //true //valor_tipo

/**********************

//TABELA_VERDADE
A B A&&B
V V   V
V F   F
F V   F
F F   F

A B A||B
V V   V
V F   V
F V   V
F F   F

A !A
V  F
F  V

*********************/


//Calcule o raio da circunferência em caso positivo
//IF
var ar, ra;
ra = parseFloat(prompt("Insira o raio"));
if (!(ra <= 0)) {
  ar = Math.PI*Math.pow(ra,2);
  alert("A área é "+ ar.toFixed(2));
} else if (ra <= 0) {
  alert("NaN"+", raio "+ ra);
}

//OPERADOR_TERNÁRIO
var ar, ra;
ra = parseFloat(prompt("Insira o raio"));
ar = (ra > 0) ? ar = Math.PI.toFixed(2)*Math.pow(ra,2): "NaN"+", raio "+ra;
alert('Área: '+ ar);


/* Escreva um programa que leia 
quatro notas de um aluno 
aulas dadas
aulas comparecidas
e mostre se ele foi aprovado ou reprovado */

//IF
var n1, n2, n3, n4, med, aulD, aulC, freq;
n1 = parseFloat(prompt("Nota 1"));
n2 = parseFloat(prompt("Nota 2"));
n3 = parseFloat(prompt("Nota 3"));
n4 = parseFloat(prompt("Nota 4"));
aulD = parseInt(prompt("Aulas dadas"));
aulC = parseInt(prompt("Aulas comparecidas"));
med = (n1+n2+n3+n4)/4;
freq = (aulC*100/aulD).toFixed(1);
if (med >= 7 && freq >= 75) {
  alert("Passou corno");
} else if (med < 7 || freq < 75) {
  alert("Rodou corno");
}
console.log(med);
console.log(freq);

//TERNÁRIO
var n1, n2, n3, n4, med, aulD, aulC, freq, resul;
n1 = parseFloat(prompt("Nota 1"));
n2 = parseFloat(prompt("Nota 2"));
n3 = parseFloat(prompt("Nota 3"));
n4 = parseFloat(prompt("Nota 4"));
aulD = parseInt(prompt("Aulas dadas"));
aulC = parseInt(prompt("Aulas comparecidas"));
med = (n1+n2+n3+n4)/4;
freq = (aulC*100/aulD).toFixed(1);
resul = (med >= 7 && freq >= 75) ? "Passou": "Rodou";
alert(resul);
