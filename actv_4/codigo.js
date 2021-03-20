var arrayNumeros=[];
function agregar(){
var num=parseInt(document.getElementById('num').value);
 arrayNumeros.push(num); //almacenamos el número en el array
document.getElementById('num').value='';
document.getElementById('num').focus();
mostrarListadoNumeros();
}
function mostrarListadoNumeros(){
    var salida='';
    var salida1='';
    var contar = arrayNumeros.length;
    var suma= sumaElementos();
    var elemMayor= Math.max.apply(null,arrayNumeros);
    var elemMen= Math.min.apply(null,arrayNumeros);
    var numerosImpares= numImpares();
    var numPar= 0;
    var multCin= 0;

    for(i=0; i< contar; i++)
    salida+='<tr><td>'+arrayNumeros[i]+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
    salida1+= '<tr><td>'+'Cantidad de Elementos'+ '</td><td>'+ contar+'</td></tr>';
    salida1+= '<tr><td>'+'Suma de Elementos'+ '</td><td>'+ suma+'</td></tr>';
    salida1+= '<tr><td>'+'Promedio'+'</td><td>'+suma/contar +'</td></tr>';
    salida1+= '<tr><td>'+ 'Elemento Mayor' +'</td><td>'+ elemMayor +'</td></tr>';
    salida1+= '<tr><td>'+'Elemento Menor'+'</td><td>'+elemMen +'</td></tr>';
    salida1+= '<tr><td>'+'Números Impares'+'</td><td>'+ "" +'</td></tr>';
    salida1+= '<tr><td>'+'Números Pares'+'</td><td>'+"" +'</td></tr>';


    document.getElementById('otroCuerpo').innerHTML=salida1;
}
function sumaElementos(){
    var sum=0;
    for(i in arrayNumeros)
      sum+=arrayNumeros[i];
    return sum;
}
