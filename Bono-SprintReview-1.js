/* Proyecto Integrador - Sprint Review - 1:
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
    imprimir(lista);
}

// Función ajustada para borrar un contacto existente
function borrar (lista,index){
    if (index >= 0 && index < lista.length) {
        lista.splice(index,1),
        imprimir(lista)
    }
    else{
        return(console.error("\nEl indice no existe, intentelo de nuevo"))
        //return(console.log('\x1b[31m%s\x1b[0m', '\nEl indice no existe, intentelo de nuevo'));
    }
}

// Función para imprimir en consola los contactos
function imprimir (lista){
    for (let i = 0; i < lista.length; i++) {
        d = lista[i];
        console.log("\nContacto " + i+ "");
        for (propiedad in d){
            if(typeof(d[propiedad]) === "object"){
                console.log("\t"+propiedad + ":" )
                for (ubicacion in d[propiedad]){
                    console.log("\t\t"+ubicacion + ":" + d[propiedad][ubicacion])
                }
            }
            else    console.log("\t"+propiedad + ":" + d[propiedad]);
        }
    };
}


// Función actualizar un contacto
function actualizar ( lista, id, key, valor ){
    lista = lista.map(elemento => {
        if(elemento.id === id){
            elemento[key] = valor;
            return elemento;
        }else{
            return elemento;
        }
    });
    return(lista)
}


// Crear lista de contactos
let lista_de_contactos = []
let a = 0
for(let i = 0; i < 4; i++){
    lista_de_contactos.push(create_contact(i, "Nombre " + i, "Apellido " + i, + 1000000+ i * i, "Ciudad " + i, "Direccion " + i))
    a = i
}

// Crear nuevos contactos 
a++
let dato0 = a;
let dato1 = "Sheldon";
let dato2 = "Cooper";
let dato3 = 10000000 + a*a;
let dato4 = "Ciudad " +a;
let dato5 = "Direccion " + a;


// Llamar funciones
console.log("\n" + "Lista de contactos predefinida: ");
imprimir(lista_de_contactos);

console.log("\n" + "Función para añadir un nuevo contacto:");
añadir(lista_de_contactos, dato0,dato1,dato2, dato3, dato4, dato5);

console.log("\n\n" + "Función para borrar un contacto existente (id:1):");   
borrar(lista_de_contactos,1)

console.log("\n" + "Función para actualizar un contacto (id:2): ");
lista_de_contactos = actualizar(lista_de_contactos,2,"nombres", "Luisa");
imprimir(lista_de_contactos);

console.log("\n" + "Función para actualizar un contacto(id:3): ");
lista_de_contactos = actualizar(lista_de_contactos,3,"telefono", "3013030301");
imprimir(lista_de_contactos);
