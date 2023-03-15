//Exercício 3: Distância entre dois pontos (*)


function CalculateDistance(x1: number, x2: number, y1: number, y2: number): number {
    let distance = Math.sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2);
    return distance;
}

console.log(CalculateDistance(3, 3, 4, 5));