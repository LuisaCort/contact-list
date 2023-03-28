/* Proyecto Integrador - 2:
    Lista de contactos */

// Función crea un contacto
const create_contact = (id, nombres, apellidos, telefono, ciudad, direccion) => {
    return {id: id,
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            ubicaciones: {ciudad: ciudad, direccion: direccion}}
    }
    
// Función ajustada para añadir un nuevo contacto
function añadir (lista, id, nombres, apellidos, telefono, ciudad, direccion){
    for (let i = 0; i < lista.length; i++) {
        lista[i].id = i;
    }
    lista_de_contactos.push(create_contact(id, nombres, apellidos, telefono, ciudad, direccion));
    //imprimir(lista);
}

// Función ajustada para borrar un contacto existente
function borrar (lista){
    lista.pop();
    //imprimir(lista);
}

// Función para imprimir en consola los contactos
function imprimir (lista){
    for (let i = 0; i < lista.length; i++) {
        d = lista[i];
        console.log("\nContacto " + i);
        for (propiedad in d){
            console.log(propiedad + ":" + d[propiedad]);
        }
    };
}


// Crear lista de contactos
let lista_de_contactos = [];

// Crear nuevos contactos 
let dato0 = 00;
let dato1 = "Sheldon";
let dato2 = "Cooper";
let dato3 = 100057;
let dato4 = "bogota";
let dato5 = "cra3";

let dat0 = 01;
let dat1 = "Leonard";
let dat2 = "Hofstadter";
let dat3 = 110057;
let dat4 = "Medellin";
let dat5 = "cra2";

// Llamar funciones
console.log("\n" + "Función para añadir un nuevo contacto:");
añadir(lista_de_contactos, dato0,dato1,dato2, dato3, dato4, dato5);
console.log(lista_de_contactos);

console.log("\n" + "Función para añadir un nuevo contacto:");
añadir(lista_de_contactos, dat0,dat1,dat2, dat3, dat4, dat5);
console.log(lista_de_contactos);

console.log("\n" + "Función para borrar un contacto existente:");   
borrar(lista_de_contactos)
console.log(lista_de_contactos);

console.log("\n" + "Función para imprimir en consola los contactos:");
imprimir(lista_de_contactos);