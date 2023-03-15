//Exercício 5: Cálculo da hipotenusa (*)

function CalculateHypotenuse(cos: number, sin: number): number {
    let hypotenuse = Math.sqrt(cos ^ 2 + sin ^ 2);
    return hypotenuse;
}

console.log("The hypotenuse will be:" + CalculateHypotenuse(3, 3));