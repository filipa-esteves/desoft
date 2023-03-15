//Exercício 4: Cálculo do perímetro de um retângulo (*)


function CalculatePerimeter(width: number, length: number): number {
    let perimeter = 2 * width + 2 * length;
    return perimeter;
}

console.log("The perimeter will be:" + CalculatePerimeter(3, 3));