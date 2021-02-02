function sacarColor() {
    numColor = document.getElementById('numero');
    caja = document.querySelector('.caja');
    if(numColor.value == "0") {
        caja.style.background = "green";
    }
    else if(numColor.value =="1") {
        caja.style.background = "#ff0000";
    }
    else if(numColor.value =="2") {
        caja.style.background = "grey";
    }
    else if(numColor.value =="3") {
        caja.style.background = "lightblue";
    }
    else if(numColor.value =="4") {
        caja.style.background = "blue";
    }
    else if(numColor.value =="5") {
        caja.style.background = "lightgreen";
    }
    else if(numColor.value =="6") {
        caja.style.background = "darkmagenta";
    }
    else if(numColor.value =="7") {
        caja.style.background = "darkcyan";
    }
    else if(numColor.value =="8") {
        caja.style.background = "yellow";
    }
    else if(numColor.value =="9") {
        caja.style.background = "darksalmon";
    }
    else if(numColor.value =="10") {
        caja.style.background = "#ac9f55";
    }
    else {
        document.getElementById("msn").innerHTML = "Coloca un numero valido";
    }

}