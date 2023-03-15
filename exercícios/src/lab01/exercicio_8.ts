//Exercício 8: Cálculo distância percorrida (**)

function TravelDistance (time1:number, time2:number, distance1:number): number{
    let distance2 =  time2*distance1/time1 / 1000
    return distance2;
}

//console.log("The distance in km will be:" + TravelDistance(242.10 , 65 , 42195));

console.log("The distance in km will be:" + " " + (Math.round((65* 42195)/242.10) / 1000).toFixed(2));