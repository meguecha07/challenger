var letras = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
var texto = "";
var divide = "";
var encriptar = "";
var desencriptar = "";

function showInput() {
  document.getElementById("animacion").style.width = "50%";
  document.getElementById("animacion").style.padding = "0 20%";
  document.getElementById("btnCopy").style.display = "grid";
}

function input() {
  texto = document.getElementById("txtCadena").value;
  document.getElementById("txtCadena2").value = texto;
}

function encrypter() {
  texto = document.getElementById("txtCadena").value;
  var divide = texto.split("");
  for (var i = 0; i < divide.length; i++) {
    console.log(divide[i]);
    if (divide[i] in letras) {
      divide[i] = letras[divide[i]];
    }
  }
  encriptar = "";
  divide.forEach((letra) => {
    encriptar += letra;
  });
  document.getElementById("txtCadena2").value = "";
  document.getElementById("txtCadena2").value = encriptar;
  console.log(encriptar);
  document.getElementById("txtCadena").value = "";
  showInput();
}

function showTxt() {
  document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      encrypter();
      showInput();
    }
  });
}

function decrypt() {
  texto = document.getElementById("txtCadena").value;
  var searchTerm = ["ai", "enter", "imes", "ober", "ufat"];
  searchTerm.forEach((palabra) => {
      console.log(texto.indexOf(palabra));
    if (texto.indexOf(palabra) >= 0) {
        console.log(palabra);
      switch (palabra) {
        case "ai":
            console.log(texto);
          texto = texto.replaceAll(palabra, "a");
          break;
        case "enter":
          texto = texto.replaceAll(palabra, "e");
          break;
        case "imes":
          texto = texto.replaceAll(palabra, "i");
          break;
        case "ober":
          texto = texto.replaceAll(palabra, "o");
          break;
        case "ufat":
          texto = texto.replaceAll(palabra, "u");
          break;
      }
    }
  });
  document.getElementById("txtCadena2").value = texto;
  document.getElementById("txtCadena").value = "";
}

function copy() {
  try {
    console.log(encriptar);
    navigator.clipboard.writeText(encriptar);
  } catch (err) {
    console.error("Error al leer del portapapeles:", err);
  }
}

showTxt();
document.getElementById("btnEncrypter").onclick = encrypter;
document.getElementById("btnDecrypt").onclick = decrypt;
document.getElementById("btnCopy").onclick = copy;
