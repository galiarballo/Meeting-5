
var hobbies = new Array();

function Datos() {
	// nombre, apellido, edad, pais, sexo, hobbie
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let edad = document.getElementById("edad").value;
	let opcionesPais = document.getElementById('pais').options[document.getElementById('pais').selectedIndex].value;
	var sexo = document.querySelector('input[name="sexo"]:checked').value;
	var hobbies_list = document.querySelectorAll('input[name="hobbies"]:checked');
	
	if (!nombre || !apellido || !edad || !sexo || !opcionesPais) {
		alert("Completa todos los datos");
		return false;
	} else {
		alert("Datos cargados");
	}


	if (hobbies_list.value != "") {
		hobbies.push(hobbies_list.value);
		listar();
	}


	hobbies_list.forEach(function(userItem) {
		hobbies.push(userItem.value);
	});
	

	console.log(nombre);
	console.log(apellido);
	console.log(edad);
	console.log(pais);
	console.log(sexo);
	console.log(hobbies_list);
	


	
}


function listar() {
    let codigo = "<ul>";

    for(var i = 0; i < hobbies.length; i++){
        codigo += "<li>" + hobbies[i] + "</li>";
    }

    codigo += "</ul>";

    document.getElementById("listado").innerHTML = codigo;
}