//Busca na Internet
var t, primL;
t = parseInt(prompt('Insira q quantidade de pessoas que clicaram no terceiro link'));
primL = 4*t;
alert('Nessa busca, '+ primL +' pessoas clicaram no primeiro link');

//Metade do Intervalo
var H, H1, H2, M, M1, M2, S, S1, S2, hor1, hor2, interv;
H1 = parseInt(prompt('Insira hora 1'));
M1 = parseInt(prompt('Insira minuto 1'));
S1 = parseInt(prompt('Insira segundo 1'));
H2 = parseInt(prompt('Insira hora 2'));
M2 = parseInt(prompt('Insira minuto 2'));
S2 = parseInt(prompt('Insira segundo 2'));
hor1 = H1*3600+M1*60+S1;
hor2 = H2*3600+M2*60+S2;
interv = (hor1 < hor2) ? Math.abs(hor2-hor1): 86400-hor1+hor2;
interv = parseInt(interv/2);
H = parseInt(interv/3600);
interv %= 3600;
M = parseInt(interv/60);
interv %= 60;
S = interv;
alert('A metade do intervalo é de '+ H +':'+ M +':'+ S);
