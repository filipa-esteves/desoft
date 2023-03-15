//Exercício 4: Operadores de divisão (*)

/*MOD: operador MÓDULO - devolve o resto da divisão inteira (5 MOD 2 → 1).
DIV: operador DIVISÃO INTEIRA – devolve o quociente inteiro (5 DIV 2 → 2).
INICIO (numero: INTEIRO)
ED: digito1, digito2, digito3 INTEIRO
SE (numero <100 OU numero >999) ENTÃO
ESCREVER(“Número não tem 3 dígitos”)
digito1 <- -1
SENÃO
digito3 <- numero MOD 10
digito2 <- (numero DIV 10) MOD 10
digito1 <- (numero DIV 100) MOD 10
FIMSE
RETORNAR digito1
FIM*/