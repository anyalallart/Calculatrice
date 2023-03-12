function efface() {
    document.getElementById("output").innerHTML = "0";
}

function clique(carac){
    let v = document.getElementById("output");
    if(carac == "r") carac = ")";
    if(carac == "l") carac = "(";

    if (v.innerHTML == "0") v.innerHTML = carac;
    else v.innerHTML += carac;
}

function calcul(){
    try {
        let equa = eval(document.getElementById("output").innerHTML);
        document.getElementById('output_solve').innerHTML = document.getElementById('output').innerHTML + " = " + equa;
        document.getElementById('output').innerHTML = "0";
    } catch (error) {
        document.getElementById('output').innerHTML = "Error";
    }
}