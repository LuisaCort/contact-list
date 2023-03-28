/* Proyecto Integrador - 1:
    Lista de contactos */

// Función para añadir un nuevo contacto
function añadir (lista, nombre){
    if (nombre.constructor === Array ){
        //console.log("array");
        for (let i=0; i<nombre.length; i++){
            lista.push(nombre[i]);
        };
        imprimir(lista); 
    }else{
        //console.log("No array");   
        lista.push(nombre);
        imprimir(lista);   
    }  
}

// Función para borrar un contacto existente
function borrar (lista){
    lista.pop();
    imprimir(lista);
}

// Función para imprimir en consola los contactos
function imprimir (lista){
    for (let i=0; i<lista.length; i++){
        console.log(lista[i]);
    }
}

// Crear lista de contactos
let listaContactos = ["Leonard Hofstadter","Sheldon Cooper","Penny","Howard Wolowitz","Raj Koothrappali","Bernadette Rostenkowski","Amy Farrah Fowler"];
// Crear nuevos contactos 
let nuvosContactos = ["Leslie Winkle","Wil Wheaton"];
let nuvoContacto1 = 'Leslie Winkle';
let nuvoContacto2 = 'Wil Wheaton';
let nuvoContacto3 = 'Daria Morgendorffer';

// Llamar funciónes 
console.log("\n" + "Función para imprimir en consola los contactos:");
imprimir(listaContactos);
console.log("\n" + "Función para añadir varios contactos:");
añadir(listaContactos, nuvosContactos);
console.log("\n" + "Función para añadir un nuevo contacto:");
añadir(listaContactos, nuvoContacto3);
console.log("\n" + "Función para borrar un contacto existente:");
borrar(listaContactos);
