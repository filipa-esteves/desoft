//Exercício 2: Cálculo do valor de encomenda (*)

export function calculatePrice(roses: number, tulips: number, priceRose: number, priceTulips: number): number {
    let priceTotal = roses * priceRose + tulips * priceTulips;
    return priceTotal;
}

//calculatePrice(2.1, 1, 4, 4);
console.log(calculatePrice(2.1, 1, 4, 4));