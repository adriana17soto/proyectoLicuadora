let estadoLicuadora = "apagada";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora =  document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if(estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        sonarLicuadora();
        licuadora.classList.add("active");
        //console.log("Licuadora Encendida");
    }else {
        estadoLicuadora = "apagada";
        sonarLicuadora();
        licuadora.classList.remove("active");
       // console.log("Licuadora Apagada");
    }
}

function sonarLicuadora() {
if(sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
} else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currenTime = 0;
}
};
