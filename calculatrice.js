class BaseCalculator {
    constructor (){
        this.out = document.getElementById("output");
        this.curentCalcul = []; // calcul en cours
        this.totalCalcul = []; // calculs effectués
    }

    efface() {
        // fonction qui efface le calcul en cours
        this.out.innerHTML = "0";
        this.curentCalcul = [];
    }
    
    clique(carac){
        // fonction qui affiche et ajoute au calcul le caractère choisi
        if(carac == "r") carac = ")";
        if(carac == "l") carac = "(";
    
        this.curentCalcul.push(carac);

        if (this.out.innerHTML == "0") this.out.innerHTML = carac;
        else this.out.innerHTML += carac;
    }
    
    calcul(){
        // fonction qui renvoie le calcul effectué
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
        // fonction de la touche retour
        try {
            if (this.curentCalcul.length == 0){ // si aucun calcul n'est en cours, on affiche le précédent effectué
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