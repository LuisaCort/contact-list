const create_contact = (id, nombres, apellidos, telefono, ciudad, direccion) => {
    return {id: id,
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            ubicaciones: {ciudad: ciudad, direccion: direccion}}
    }

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



let lista_de_contactos = []

for(let i = 0; i < 5; i++){
    lista_de_contactos.push(create_contact(i, "Nombre " + i, "Apellido " + i, + i * i, "Ciudad " + i, "Direccion " + i))
}

console.log(lista_de_contactos);
x(3,"nombres", "Luisa");
console.log(lista_de_contactos);