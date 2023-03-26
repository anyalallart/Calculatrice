class BaseCalculator {
    constructor (){
        this.out = document.getElementById("output");
        console.log (this.out);
    }

    efface() {
        this.out.innerHTML = "0";
    }
    
    clique(carac){
        if(carac == "r") carac = ")";
        if(carac == "l") carac = "(";
    
        if (this.out.innerHTML == "0") this.out.innerHTML = carac;
        else this.out.innerHTML += carac;
    }
    
    calcul(){
        try {
            let equa = eval(this.out.innerHTML);
            document.getElementById('output_solve').innerHTML = this.out.innerHTML + " = " + equa;
            this.out.innerHTML = "0";
        } catch (error) {
            this.out.innerHTML = "Error";
        }
    }
}

let baseCalculator = new BaseCalculator();