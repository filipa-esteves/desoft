//

export function percentage(boys: number, girls: number): [number, number] {
    let total = boys + girls;
    let boysPercentage = boys / total * 100;
    let girlsPercentage = girls / total * 100;
    return [girlsPercentage, boysPercentage]
}

percentage(10, 15);
console.log(percentage(10, 15));