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

    for(i=0; i< contar; i++)
    salida+='<tr><td>'+arrayNumeros[i]+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
    salida1+= '<tr><td>'+'Cantidad de Elementos'+ '</td><td>'+ arrayNumeros.length+'</td></tr>';
    salida1+= '<tr><td>'+'Suma de Elementos'+ '</td><td>'+ suma+'</td></tr>';
    salida1+= '<tr><td>'+'Promedio'+'</td><td>'+suma/contar +'</td></tr>';
    document.getElementById('otroCuerpo').innerHTML=salida1;
}
function sumaElementos(){
    var sum=0;
    for(i in arrayNumeros)
      sum+=arrayNumeros[i];
    return sum;
}