"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 42;
    }
}
let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
//# sourceMappingURL=clases.js.map