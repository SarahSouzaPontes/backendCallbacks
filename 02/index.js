
const multiplicador = 5;
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const tabuada = (arraynumeros, multiplicador, callback) => {
    for (let i = 0; i < numeros.length; i++) {
        let resultado = multiplicador * numeros[i];
        callback(resultado)
    }
}
tabuada(numeros, multiplicador, (resultado) => { console.log(resultado) })
