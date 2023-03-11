function clear() {
    document.getElementById("output").innerHTML = "0";
}

function click(carac){
    let v = document.getElementById("output").innerHTML;
    if (v== "0") {
         document.getElementById("output").innerHTML = carac;
    }
    else {
        value += carac;
    }
}

function calcul(){
    let equa = eval(document.getElementById("output").innerHTML);
    document.getElementById('output_solve').innerHTML = equa;
    document.getElementById('output').innerHTML = "0";
}