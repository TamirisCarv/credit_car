IMask(document.querySelector("#numero"), {
    mask: "0000 0000 0000 0000",
  });
document.getElementById("numero").addEventListener("input", function (event) {
    let numero = document.getElementById("numero").value;
    let exibirnumero = document.getElementById("exibirnumero");
  
    let asteriscoIndex = exibirnumero.innerHTML.indexOf("*");
    if (asteriscoIndex !== -1) {
        exibirnumero.innerHTML = exibirnumero.innerHTML.replace("*", numero.charAt(numero.length - 1));
     
    }
  });
  

document.getElementById("nome").addEventListener("keyup", function (event) {
    document.getElementById("exibirnome").innerHTML = document.querySelector("#nome")
        .value.toUpperCase();
});

IMask(document.querySelector("#validade"), {
    mask: "00/00",
  });

document.getElementById("validade").addEventListener("keyup", function (event) {
    document.getElementById("exibirvalidade").innerHTML = document.querySelector("#validade")
        .value.toUpperCase();
});

document.getElementById("codigo").addEventListener("keyup", function (event) {
    let codigo = document.getElementById("codigo").value;
    let exibircodigo = document.getElementById("exibircodigo");

    let asteriscoIndex = exibircodigo.innerHTML.indexOf("*");
    if (asteriscoIndex !== -1) {
        exibircodigo.innerHTML = exibircodigo.innerHTML.replace("*", codigo.charAt(0));
    }
});

IMask(document.querySelector("#cpf"), {
    mask: "000.000.000-00",
  });

document.getElementById("cpf").addEventListener("keyup", function (event) {
    let cpf = document.getElementById("cpf").value;
    let exibircpf = document.getElementById("exibircpf");

    let asteriscoIndex = exibircpf.innerHTML.indexOf("*");
    if (asteriscoIndex !== -1) {
        exibircpf.innerHTML = exibircpf.innerHTML.replace("*", cpf.charAt(cpf.length - 1));
    }
});



  

