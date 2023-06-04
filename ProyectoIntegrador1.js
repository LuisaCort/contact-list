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

// Función para borrar el último contacto existente
function borrar (lista){
    lista.pop();
    imprimir(lista);
}

// Función para borrar un cualquier contacto contacto existente por indice
function borrar_index (lista,indice){
    if (indice >= 0 && indice < lista.length) {
        lista.splice(indice,1),
        imprimir(lista)
    }
    else{
        return(console.error("El indice no existe, intentelo de nuevo"))
    }
        
}

// Función para borrar un cualquier contacto contacto existente por nombre
function borrar_nombre (lista,nombre_entrada){
    let entrada = nombre_entrada.split(" ")
    let indice = -1
    for (let i = 0; i < lista.length; i++){
        let nombres = lista[i].split(" ")
        for(let j = 0; j < nombres.length; j++){
            for (let k =0; k < entrada.length; k++){
                if(entrada[k] === nombres[j]) return borrar_index (lista,i);
            }
        }
    }
}

// Función para imprimir en consola los contactos
function imprimir (lista){
    for (let i=0; i<lista.length; i++){
        console.log(`${i} ${lista[i]}`);
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
console.log("\n" + "Función para borrar el último contacto existente:");
borrar(listaContactos);
console.log("\n" + "Función para borrar un contacto existente indicando el indice (8): ");
borrar_index(listaContactos,8);
console.log("\n" + "Función para borrar un contacto existente indicando el indice (4): ");
borrar_index(listaContactos,4);
console.log("\n" + "Función para borrar un contacto existente indicando el indice (12): ");
borrar_index(listaContactos,12);
console.log("\n" + "Función para borrar un contacto existente indicando el nombre (Fowler):");
borrar_nombre(listaContactos,"Fowler");