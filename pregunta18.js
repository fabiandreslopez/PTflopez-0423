function convertir() {
    let numero = parseInt(document.getElementById("numero").value);
    let base = parseInt(document.getElementById("base").value);
    let resultado = convertirBase(numero, base);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function convertirBase(x, k) {
    let residuos = [];
    let cociente = x;
    
    while (cociente >= k) {
      residuos.unshift(cociente % k);
      cociente = Math.floor(cociente / k);
    }
    
    residuos.unshift(cociente);
    
    return residuos.join('');}