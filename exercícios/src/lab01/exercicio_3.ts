//Exercício 3: Cálculo do volume de um cilindro (*)

function CalculateVolume(height: number, radius: number): number {
   let volume = 3.1415 * radius * height;
   console.log("The volume will be:", volume);
   return volume;
}

console.log(CalculateVolume(3.50, 40)); 