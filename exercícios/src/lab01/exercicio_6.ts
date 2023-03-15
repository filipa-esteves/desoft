//Exercício 6: Conversão de temperatura (*)

function ConvertTemperature (celsius:number): number{
    let fahrenheit= 32 + (9/5) * celsius;
    return fahrenheit;
}

console.log("The temperature will be:" + ConvertTemperature(25));