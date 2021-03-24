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
    var numImp=numImpar();
    var numPar= numPares();
    var multTres= multiploTres();
    var multCin=multiploCinco();

    for(i=0; i< contar; i++)
    salida+='<tr><td>'+arrayNumeros[i]+'</td></tr>';
    document.getElementById('cuerpo').innerHTML=salida;
    salida1+= '<tr><td>'+'Cantidad de Elementos'+ '</td><td>'+ contar+'</td></tr>';
    salida1+= '<tr><td>'+'Suma de Elementos'+ '</td><td>'+ suma+'</td></tr>';
    salida1+= '<tr><td>'+'Promedio'+'</td><td>'+suma/contar +'</td></tr>';
    salida1+= '<tr><td>'+ 'Elemento Mayor' +'</td><td>'+ elemMayor +'</td></tr>';
    salida1+= '<tr><td>'+'Elemento Menor'+'</td><td>'+elemMen +'</td></tr>';
    salida1+= '<tr><td>'+'Números Impares'+'</td><td>'+ numImp +'</td></tr>';
    salida1+= '<tr><td>'+'Números Pares'+'</td><td>'+ numPar +'</td></tr>';
    salida1+= '<tr><td>'+'Multiplos de 3'+'</td><td>'+ multTres +'</td></tr>';
    salida1+= '<tr><td>'+'Multiplos de 5'+'</td><td>'+ multCin +'</td></tr>';


    document.getElementById('otroCuerpo').innerHTML=salida1;
}
function sumaElementos(){
    var sum=0;
    for(i in arrayNumeros)
      sum+=arrayNumeros[i];
    return sum;
}


function numPares(){
  var nPar=0;
  for (var i=0;i< arrayNumeros.length;i++){
    if (arrayNumeros[i] %2 === 0){
      nPar ++;
    }
  }
  return nPar;
}

function numImpar(){
  var nImp=0;
  for (var i=0;i< arrayNumeros.length;i++){
    if (arrayNumeros[i] %2 != 0){
      nImp ++;
    }
  }
  return nImp;
}

function multiploTres(){
  var mTres=0;
  for (var i=0;i< arrayNumeros.length;i++){
    if(i%3 == 0){
      mTres ++;
    }
  }
  return mTres;
}

function multiploCinco(){
  var mCinco=0;
  for (var i=0;i< arrayNumeros.length;i++){
    if(i%5 == 0){
      mCinco ++;
    }
  }
  return mCinco;
}