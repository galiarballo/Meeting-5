let listaMarcas = [];

function agregar() {
    if (document.getElementById("marca").value != "") {
        listaMarcas.push(document.getElementById("marca").value);
        document.getElementById("marca").value = "";
        listar();
    }
}

function borrarPrimero() {
    listaMarcas.shift();
    listar();
}

function borrarUltimo() {
    listaMarcas.pop();
    listar();
}

function listar() {
    let codigo = "<ul>";

    for(var i = 0; i < listaMarcas.length; i++){
        codigo += "<li>" + listaMarcas[i] + "</li>";
    }

    codigo += "</ul>";

    document.getElementById("listado").innerHTML = codigo;
}
