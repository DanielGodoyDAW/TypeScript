interface Usuario{
    nombreUsuario: string;
    password: string;
    confirmarPassword?:string;
}

let usuario1:Usuario = {
    nombreUsuario: "daniel",
    password: "12345"
};

console.log(usuario1);

interface Abordar{
    abordarTransporte(): void;
}
let avion:Abordar = {
    abordarTransporte: function() {
        console.log("Abordando el avión");
    }
};
avion.abordarTransporte();
