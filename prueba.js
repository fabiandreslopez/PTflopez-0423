/*pregunta 2*/

var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

ctx.moveTo(10,10);
ctx.lineTo(180,180);

ctx.strokeStyle="#f00";
ctx.stroke();

/**pregunta 4*/
let x = 4;
let y = new Number(4);
let z = 4;

console.log(x == y);
console.log(x === y);
console.log(y === z);
console.log('❤️' === '❤️')

/**pregunta 5 */

function metodoquehacealgo(valor) {
    if (valor < 3) {
      return valor;
    }
    return metodoquehacealgo(valor - 1) * metodoquehacealgo(valor - 2);
  }
  
  let resultado = metodoquehacealgo(5);
  console.log(resultado);
  
// funcion metodoquehacealgo(entero valor)
// si (valor<3)entonces
//  retornar valor;
//  fin si
//  retornar metodoquehacealgo(valor-1)*metodoquehacealgo(valor-2);
//  fin funcion