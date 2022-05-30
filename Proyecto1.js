const prompt = require('prompt-sync')();

console.log("**********\nCALCULADORA\n************");
console.log("Menu: ");
console.log("1.- Sumar");
console.log("2.- Restar");
console.log("3.- Multiplicación");
console.log("4.- División");
console.log("5.- Salir");

let fin = false;
let opcion =0;
while(!fin)
{
    opcion = parseInt(prompt("Opcion: "));
    switch(opcion)
    {
        case 1:
            let sumando1= parseInt(prompt("Inserte el primer numero: "));
            let sumando2= parseInt(prompt("Inserte el segundo numero: "));
            console.log("El resultado es "+(sumando1+sumando2));
            break;
        
        case 2:
            let minuendo = parseInt(prompt("Inserte el minuendo "));
            let sustraendo = parseInt(prompt("Inserte el sustraendo "));
            console.log("El resultado es " +(minuendo-sustraendo));
            break;
        
        case 3:
            let multiplicando = parseInt(prompt("Inserte multiplicando: "));
            let multiplicador = parseInt(prompt("Inserte multiplicador: "));
            console.log("Resultado de la multiplicación: " + (multiplicando * multiplicador));
            break;

        case 4:
            let dividendo = parseInt(prompt("Inserte dividendo: "));
            let divisor = parseInt(prompt("Inserte divisor: "));
            console.log("Resultado de la division: " + (dividendo / divisor));
            break;

        case 5:
            fin = true;
            break;


    }
}
console.log("Programa finalizado");