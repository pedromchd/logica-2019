//CALCULADORA v1
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação: + - * /');
n2 = parseFloat(prompt('Insira outro número'));
alert(eval(n1+op+n2));

//CALCULADORA v2
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação + - * / ** rt %');
if (op == '**' || op == 'rt') {
    n2 = parseInt(prompt('Insira o índice/expoente'));
    if (op == '**') {
        alert(n1**n2);
    } else {
        alert(n1**(1/n2));
    }
} else {
    n2 = parseFloat(prompt('Insira outro número'));
    alert(eval(n1+op+n2));
}

//CALCULADORA v3
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%] [trunc] [pos]');
if (op == 'trunc' || op == 'pos') {
    n1 = parseInt(n1);
    n2 = parseInt(prompt('Insira as casas a truncar/a posição a se achar'));
    if (op == 'trunc') {
        alert(n1/(10**n2));
    } else {
        n1 /= Math.pow(10,n2);
        n1 -= parseInt(n1);
        n2 = parseInt(n1*10);
        alert(n2);
    } 
} else if (op == '**' || op == 'rt') {
    n2 = parseInt(prompt('Insira o índice/expoente'));
    if (op == '**') {
        alert(n1**n2);
    } else {
        alert(n1**(1/n2));
    }
} else {
    n2 = parseFloat(prompt('Insira outro número'));
    alert(eval(n1+op+n2));
}

//CALCULADORA v4
var n1, n2, op;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%] [trunc] [pos] [mul]');
if (op == 'mul') {
  n2 = parseInt(prompt('Múltplo anterior e posterior do número'));
  n1 = n1-1-(n1-1)%n2;
  res = n1+' e ';
  n1 = n1+(n2-n1%n2);
  res += n1;
} else if (op == 'trunc' || op == 'pos') {
    n1 = parseInt(n1);
    n2 = parseInt(prompt('Insira as casas a truncar/a posição a se achar'));
    if (op == 'trunc') {
        alert(n1/(10**n2));
    } else {
        n1 /= Math.pow(10,n2);
        n1 -= parseInt(n1);
        n2 = parseInt(n1*10);
        alert(n2);
    } 
} else if (op == '**' || op == 'rt') {
    n2 = parseInt(prompt('Insira o índice/expoente'));
    if (op == '**') {
        alert(n1**n2);
    } else {
        alert(n1**(1/n2));
    }
} else {
    n2 = parseFloat(prompt('Insira outro número'));
    alert(eval(n1+op+n2));
}


//CALCULADORA v3
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%] [trunc] [pos]');
if (op == 'trunc' || op == 'pos') {
  n1 = parseInt(n1);
  n2 = parseInt(prompt('Insira as casas a truncar/a posição a se achar'));
  if (op == 'trunc') {
    res = n1/(10**n2);
  } else {
    n1 /= Math.pow(10,n2);
    n1 -= parseInt(n1);
    res = parseInt(n1*10);
  } 
} else if (op == '**' || op == 'rt') {
  n2 = parseInt(prompt('Insira o expoente/índice'));
  if (op == '**') {
    res = n1**n2;
  } else {
    res = n1**(1/n2);
  }
} else {
  n2 = parseFloat(prompt('Insira outro número'));
}
if (op == '+') {
  res = n1 + n2;
}
if (op == '-') {
  res = n1 - n2;
}
if (op == '*') {
  res = n1 * n2;
}
if (op == '/') {
  res = n1 / n2;
}
if (op == '%') {
  res = n1 % n2;
}
alert(res);


//CALCULADORA v4
var n1, n2, op, res;
n1 = parseFloat(prompt('Insira um número'));
op = prompt('Insira a operação [+] [-] [*] [/] [**] [rt] [%] [trunc] [pos] [mul]');
if (op == 'mul') {
  n2 = parseInt(prompt('Múltplo anterior e posterior do número'));
  n1 = n1-1-(n1-1)%n2;
  res = n1+' e ';
  n1 = n1+(n2-n1%n2);
  res += n1;
} else if (op == 'trunc' || op == 'pos') {
  n1 = parseInt(n1);
  n2 = parseInt(prompt('Insira as casas a truncar/a posição a se achar'));
  if (op == 'trunc') {
    res = n1/(10**n2);
  } else {
    n1 /= Math.pow(10,n2);
    n1 -= parseInt(n1);
    res = parseInt(n1*10);
  } 
} else if (op == '**' || op == 'rt') {
  n2 = parseInt(prompt('Insira o expoente/índice'));
  if (op == '**') {
    res = n1**n2;
  } else {
    res = n1**(1/n2);
  }
} else {
  n2 = parseFloat(prompt('Insira outro número'));
}
if (op == '+') {
  res = n1 + n2;
}
if (op == '-') {
  res = n1 - n2;
}
if (op == '*') {
  res = n1 * n2;
}
if (op == '/') {
  res = n1 / n2;
}
if (op == '%') {
  res = n1 % n2;
}
alert(res);
