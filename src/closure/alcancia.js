//Prueba tecnica de Playground: Crea un Closure para Sumar

export function sumWithClosure(num1 = 0) {
    return function (num2 = 0) {
      const suma = num1 + num2;
      return suma;
    }
  }

