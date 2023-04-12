/* Proyecto Integrador - Bono:
    Lista de contactos */

// Función crea un contacto
const create_contact = (id, nombres, apellidos, telefono, ciudad, direccion) => {
    return {id: id,
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            ubicaciones: {ciudad: ciudad, direccion: direccion}}
    }

// Función actualizar un contacto
function x ( id, key, valor ){
    lista_de_contactos = lista_de_contactos.map(elemento => {
        if(elemento["id"] === id){
            elemento[key] = valor;
            return elemento;
        }else{
            return elemento;
        }

    });
}


// Crear lista de contactos
let lista_de_contactos = []

// Crear nuevos contactos 
for(let i = 0; i < 5; i++){
    lista_de_contactos.push(create_contact(i, "Nombre " + i, "Apellido " + i, + i * i, "Ciudad " + i, "Direccion " + i))
}
console.log("\n" + "Lista de contactos: ");
console.log(lista_de_contactos);

// Llamar funciones
console.log("\n" + "Función para actualizar un contacto: ");
x(3,"nombres", "Luisa");
console.log(lista_de_contactos);

console.log("\n" + "Función para actualizar un contacto: ");
x(1,"telefono", "3013030301");
console.log(lista_de_contactos);