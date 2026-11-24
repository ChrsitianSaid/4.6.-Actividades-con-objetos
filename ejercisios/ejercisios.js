console.log("1. Creación y acceso a objetos.")
const persona = {
    nombre : "Ana",
    edad : 28,
    trabajo: "Ingeniera"
}

console.log(persona.nombre);
persona.edad = 29;

for (let propiedad in persona) {
    console.log(`${propiedad} : ${persona[propiedad]}`)
}

console.log("==========================================================================//================================================")
persona.pais="España";

for (let propiedad in persona) {
    console.log(`${propiedad} : ${persona[propiedad]}`)
}

delete persona.trabajo;

console.log (persona);

console.log("==========================================================================//================================================")
console.log(persona["edad"]);

console.log("==========================================================================//================================================")
console.log("2. Bucle ForEach")

let existeNombre = false;
let existeApellido = false;

Object.keys(persona).forEach((clave) => {
  if (clave === "nombre") {
    existeNombre = true;
  };
  if (clave === "apellido") {
    existeApellido = true;
  };
});

console.log("¿Existe el nombre? "+existeNombre);
console.log("¿Existe el apellido? "+existeApellido);

console.log("---propiedades de persona---")

Object.entries(persona).forEach(([clave, valor]) => {
    console.log(`${clave} : ${valor}`)
})

console.log("==========================================================================//================================================")
console.log("3. Referencias de objetos y clonación")

const usuario1 = {
    nombre: "Juan Carlos",
    edad: 35,
    email: "juan@gmail.com"
}

const usuario2 = usuario1;

usuario2.edad = 40;

console.log(`Usaurio1 despues de modificar Usuario2`);
console.log(usuario1);

console.log("usaurio2");
console.log(usuario2);

//Clonacion superficial  con Object.assign()
const clonUsuario = Object.assign({}, usuario1);

//modifiacmos el clone
clonUsuario.nombre="Pedro";

console.log(`Usaurio1 despues de modificar clon`);
console.log(usuario1);

console.log("clon");
console.log(clonUsuario);

console.log("==========================================================================//================================================")
console.log("4. Métodos en objetos y uso de (this)");

function Coche(nombre, modelo, anio) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.anio = anio;
};

//crear objeto con new
const coche1 = new Coche("Toyota","Corolla", 2022);
const coche2 = new Coche("Ford","Focus", 2022);

console.log(coche1);
console.log(coche2);

console.log("==========================================================================//================================================")
console.log("5. Symbol y claves ocultas");

//Creacion del simbolo
const id = Symbol("id");

//Crear el objeto empleado
const empleado = {
    nombre:"Maria",
    puesto: "programadora",
    [id]: 404
};

for (let propiedad in empleado) {
    console.log(`${propiedad} : ${empleado[propiedad]}`);
};

//Acceder a la propiedad Symbol
console.log(`ID: ${empleado[id]}`)

console.log("==========================================================================//================================================")
console.log("6. Conversión de objetos a valores primitivos");

const cuentaBancaria = {
    saldo: 1000,

    toString(){
        return `saldo: ${this.saldo} EUR`
    }
}

console.log(cuentaBancaria.toString());

console.log("==========================================================================//================================================")
console.log("7. Herencia de Clases");

//Clase base
class vehicle {
    constructor(name) {
        this.name = name
    };

    move () {
        console.log(`${this.name} se esta moviendo`);
    }
};

//Clase hija
class car extends vehicle {
    constructor(name, model) {
        super(name); // Llama al constructor de Vehiculos
        this.model = model;
    }

    //sobrescribe el método move()

    move() {
        console.log(`${this.name} esta moviendose`)
    }

    info() {
        console.log(`name: ${this.name}, Model: ${this.model}`)
    }
}

//Crear el objeto
const myCar = new car ("toyota", "BZ4X");

//llamar a los metodos
myCar.move();
myCar.info();

console.log("==========================================================================//================================================")
console.log("8.Encapsulación con Propiedades Privadas");

class CajaFuerte {
    //Código privado
    #codigo;

    constructor(propietario, codigoInicial) {
        this.propietario = propietario;
        this.#codigo = codigoInicial;
    };

    //Metodo para ver el código
    verCodigo() {
        return this.#codigo;
    }

    // Método para cambiar el código
    cambiarCodigo (nuevoCodigo) {
        if (nuevoCodigo.toString().length === 4) {
            this.#codigo = nuevoCodigo;

            console.log("Codigo cambiado correctamente. ");
        } else {
            console.log("Error: el código debe tener 4 digitos");
        }
    }
}

//crear objetp
const miCaja = new CajaFuerte("Ana", 1234);

// ver código inicial
console.log(miCaja.verCodigo());

// Cambiar código
miCaja.cambiarCodigo(5678);

//Verifiacar cambio
console.log(miCaja.verCodigo());