const nombres = []; // Lista de nombres ingresados

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("⚠️ Este nombre ya fue ingresado. Ingresa otro.");
        return;
    }

    nombres.push(nombre); // Agrega el nombre a la lista

    // Agrega el nombre a la lista visual
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = ""; // Limpia el input después de agregar
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("⚠️ Debes ingresar al menos 2 nombres para sortear.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpia el resultado anterior

    const amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)]; // Selecciona un nombre al azar

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}
