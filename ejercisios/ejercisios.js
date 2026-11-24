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
cloneUsuario.nombre="Pedro";

console.log(`Usaurio1 despues de modificar clon`);
console.log(usuario1);

console.log("clon");
console.log(clonUsuario);