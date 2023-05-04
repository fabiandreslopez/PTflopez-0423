/*pregunta 17
Realice un algoritmo que reciba como parámetro dos números enteros y retorne la
división de ambos números
*/
function dividir(){
    //acceder al input Num1
    var Numero1 =parseFloat(document.getElementById('Num1').value);
    //acceder al input Num2
    var Numero2 =parseFloat(document.getElementById('Num2').value);
    //mostrar al Resultado
    var Resul =Numero1/Numero2;
    
    document.getElementById('Resultado').value=Resul;
    }