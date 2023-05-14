function insert(x)
{
    var letter = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = letter + x;
}

function clean() 
{
    document.getElementById('resultado').innerHTML = "";
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);    
    }
}

function clicar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = result;
}

function clicardois() {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    var res = parseInt(num3) + parseInt(num4);
    document.getElementById("res").innerHTML = res;
}