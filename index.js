document.getElementById("numero").addEventListener("keyup", function(event) {
    let numero = document.getElementById("numero").value;
    let exibirnumero = document.getElementById("exibirnumero");

    let asteriscoIndex = exibirnumero.innerHTML.indexOf("*");
    if (asteriscoIndex !== -1) {
        exibirnumero.innerHTML = exibirnumero.innerHTML.replace("*", numero.charAt(0));
    }
});

document.getElementById("nome").addEventListener("keyup", function(event) {
  document.getElementById("exibirnome").innerHTML = document.querySelector("#nome")
    .value.toUpperCase();
});

document.getElementById("validade").addEventListener("keyup", function(event) {
   
    document.getElementById("exibirvalidade").innerHTML = document.querySelector("#validade")
    .value.toUpperCase();
});
