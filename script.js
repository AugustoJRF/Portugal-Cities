function Multiplyporto() {  // Porto
 
    var p0 = 50
    var p1 = document.getElementById("porto1").value;
    var p2 = document.getElementById("porto2").value;
    var p3 = (p0 * p1) * p2;

     if (p1 == 0 || p2 == 0) { 
        document.getElementById("perg").style.display="none";
        document.getElementById("alert").style.display="block";
        document.getElementById("alert").innerHTML = "<p><br>&nbsp&nbspFill the empty fields.<br><br></p>"
        document.getElementById("porto1").value=""
        document.getElementById("porto2").value=""
        
    } else {
        document.getElementById("perg").style.display="none";
        document.getElementById("alert").style.display="block";
        document.getElementById("alert").innerHTML = "<p><br>&nbsp&nbspThe average price is: " + p3 + " euros<br><br></p>"
        document.getElementById("porto1").value=""
        document.getElementById("porto2").value=""
    } 
}

function Resetporto() {

        document.getElementById("perg").style.display="block";
        document.getElementById("alert").style.display="none";
}

function Multiplylisboa() {  // Lisboa
 
    var p0 = 65
    var p1 = document.getElementById("lisboa1").value;
    var p2 = document.getElementById("lisboa2").value;
    var p3 = (p0 * p1) * p2;

     if (p1 == 0 || p2 == 0) { 
        document.getElementById("perg1").style.display="none";
        document.getElementById("alert1").style.display="block";
        document.getElementById("alert1").innerHTML = "<p><br>&nbsp&nbspFill the empty fields.<br><br></p>"
        document.getElementById("lisboa1").value=""
        document.getElementById("lisboa2").value=""
        
    } else {
        document.getElementById("perg1").style.display="none";
        document.getElementById("alert1").style.display="block";
        document.getElementById("alert1").innerHTML = "<p><br>&nbsp&nbspThe average price is: " + p3 + " euros<br><br></p>"
        document.getElementById("lisboa1").value=""
        document.getElementById("lisboa2").value=""
    } 
}

function Resetlisboa() {

        document.getElementById("perg1").style.display="block";
        document.getElementById("alert1").style.display="none";
}

function Multiplybraga() {  // Braga
 
    var p0 = 45
    var p1 = document.getElementById("braga1").value;
    var p2 = document.getElementById("braga2").value;
    var p3 = (p0 * p1) * p2;

     if (p1 == 0 || p2 == 0) { 
        document.getElementById("perg2").style.display="none";
        document.getElementById("alert2").style.display="block";
        document.getElementById("alert2").innerHTML = "<p><br>&nbsp&nbspFill the empty fields.<br><br></p>"
        document.getElementById("braga1").value=""
        document.getElementById("braga2").value=""
        
    } else {
        document.getElementById("perg2").style.display="none";
        document.getElementById("alert2").style.display="block";
        document.getElementById("alert2").innerHTML = "<p><br>&nbsp&nbspThe average price is: " + p3 + " euros<br><br></p>"
        document.getElementById("braga1").value=""
        document.getElementById("braga2").value=""
    } 
}

function Resetbraga() {

        document.getElementById("perg2").style.display="block";
        document.getElementById("alert2").style.display="none";
}
