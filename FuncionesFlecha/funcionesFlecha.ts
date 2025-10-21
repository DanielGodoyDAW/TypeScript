let suma = function(a: number, b: number) {
    return a + b;
}

console.log(suma(2, 3)); // 5

let sumaFlecha = (a: number, b: number) => a + b;


console.log(sumaFlecha(5, 3)); // 8

let obtenerNombre = function() {
    return "Juan Pérez";
}

let obtenerNombreFlecha = () => "Juan Pérez";

console.log(obtenerNombreFlecha()); // "Juan Pérez"