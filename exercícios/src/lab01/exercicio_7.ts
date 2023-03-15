//Exercício 7: Conversão para minutos (*)

function ConvertMinutes (hours:number, minutes:number): number{
    let TotalMinutes= hours * 60 + minutes;
    return TotalMinutes;
}

console.log("The number of minutes will be:" + ConvertMinutes(2,120));