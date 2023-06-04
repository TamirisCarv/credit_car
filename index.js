document.getElementById("numero").addEventListener("keyup", function(event) {
    let numero = document.getElementById("numero").value;
    let exibirnumero = document.getElementById("exibirnumero");

    let asteriscoIndex = exibirnumero.innerHTML.indexOf("*");
    if (asteriscoIndex !== -1) {
        exibirnumero.innerHTML = exibirnumero.innerHTML.replace("*", numero.charAt(0));
    }
});

document.getElementById("nome").addEventListener("keyup", function(event) {
    let nome = document.getElementById("nome").value;
    document.getElementById("exibirnome").innerHTML = nome;
});
