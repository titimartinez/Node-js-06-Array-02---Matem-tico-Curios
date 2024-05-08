function generarSecuencia(semilla) {
    let secuencia = [semilla];
    let siguiente = semilla;
    let numerosVistos = new Set();
    
    while (true) {
        if (siguiente % 2 === 0) {
            siguiente = siguiente / 2;
        } else {
            siguiente = siguiente * 3 + 1;
        }
        
        if (numerosVistos.has(siguiente)) {
            secuencia.push(siguiente);
            break;
        }
        
        secuencia.push(siguiente);
        numerosVistos.add(siguiente);
    }
    
    return secuencia;
}

function calcularSecuencia() {
    const semillaInput = document.getElementById('semilla');
    const semilla = parseInt(semillaInput.value);

    if (isNaN(semilla) || semilla < 1 || semilla >= 10000) {
        alert('Por favor, ingrese una semilla valida (entre 1 y 9999).');
        return;
    }

    const secuencia = generarSecuencia(semilla);
    const secuenciaStr = secuencia.join(' -> ');
    const numeroRepetido = secuencia[secuencia.length - 1];

    alert(`La secuencia generada es: ${secuenciaStr}\nEl numero repetido en la secuencia es: ${numeroRepetido}`);
}