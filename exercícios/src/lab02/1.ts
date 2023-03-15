//Exercício 1: Média Pesada

/*INICIO (nota1: INTEIRO, nota2: INTEIRO, nota3: INTEIRO,
    peso1: INTEIRO, peso2: INTEIRO, peso3: INTEIRO)
    ED: mediaPesada REAL
    mediaPesada  (nota1*peso1+ nota2*peso2+ nota3*peso3) /(peso1+peso2+peso3)
    RETORNA (mediaPesada)
    FIM*/


function CalculateAverage(note1: number, note2: number, note3: number, weight1: number, weight2: number, weight3: number): number {
    let average = (note1 * weight1 + note2 * weight2 + note3 * weight3) / (weight1 + weight2 + weight3);
    return average;
}

console.log(CalculateAverage(1, 2, 3, 4, 5, 6));