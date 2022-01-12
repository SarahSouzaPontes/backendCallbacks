//5 x 0 = 0
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
//5 x 5 = 25
//5 x 6 = 30
//5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50

//Função callback:
const num1 = 5;
const num2 = 0;
const tabuadaDe5 = (num1, num2, callback) => {
    const resultado = num1 * num2;
    callback(resultado)
}
tabuadaDe5(num1, num2, (resultado) => {
    console.log(`Resutado de tabuada:${resultado}`);
});