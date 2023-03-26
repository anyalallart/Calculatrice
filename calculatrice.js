class BaseCalculator {
    constructor (){
        this.out = document.getElementById("output");
        this.curentCalcul = [];
        this.totalCalcul = [];
    }

    efface() {
        this.out.innerHTML = "0";
        this.curentCalcul = [];
    }
    
    clique(carac){
        if(carac == "r") carac = ")";
        if(carac == "l") carac = "(";
    
        this.curentCalcul.push(carac);

        if (this.out.innerHTML == "0") this.out.innerHTML = carac;
        else this.out.innerHTML += carac;
    }
    
    calcul(){
        try {
            let equa = eval(this.out.innerHTML);
            this.totalCalcul.push(this.curentCalcul);
            document.getElementById('output_solve').innerHTML = this.out.innerHTML + " = " + equa;
            this.efface();
        } catch (error) {
            this.out.innerHTML = "Error";
        }
    }

    retour(){
        try {
            if (this.curentCalcul.length == 0){
                if (this.totalCalcul.length == 0) this.out.innerHTML = "0";
                else this.out.innerHTML = "";
                this.curentCalcul = this.totalCalcul[this.totalCalcul.length - 1];
                this.curentCalcul.forEach(e=>{
                    this.out.innerHTML += e;
                })
            }
            else {
                this.out.innerHTML = "";
                this.curentCalcul.pop();
                this.curentCalcul.forEach(e=>{
                    this.out.innerHTML += e;
                })
            }
        } catch (error) {
            this.out.innerHTML = "Error";
        }
    }

}

let baseCalculator = new BaseCalculator();