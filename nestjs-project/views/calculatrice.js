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
        
        if (this.out.innerHTML == "0"){ 
            this.out.innerHTML = carac;
            fetch('http://localhost:3000/annonces')
            .then(function(res){ 
                console.log(res) 
            })
            .catch(function(res){ console.log(res) })
        }
        else this.out.innerHTML += carac;
    }
    
    calcul(){
        // fonction qui renvoie le calcul effectué
        try {
            let equation = this.out.innerHTML
            let equa = eval(equation);
            this.totalCalcul.push(this.curentCalcul);
            document.getElementById('output_solve').innerHTML = this.out.innerHTML + " = " + equa;
            this.efface();
            fetch('http://localhost:3000/annonces', { // calcul ok, on l'envoie en requete POST
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                method: "POST",
                body: JSON.stringify({calcul: equation})
            })
            .then(async function(res){ 
                let obj = await res.json();
                alert(`temps d'éxecution : ${obj.annonce.temps}ms        temps moyen : ${obj.moyenne}ms   pourcentage plus rapide : ${obj.pourc}%`);
            })
            .catch(function(res){ console.log(res) })

        } catch (error) {
            this.out.innerHTML = "Error";
            fetch('http://localhost:3000/erreur')
            .then(async function(res){ 
                let obj = await res.json();
                console.log(obj);
                alert(`dernière erreur : ${obj.lasterror.created}  nombre d'erreur : ${obj.nberror}`);
            })
            .catch(function(res){ console.log(res) })
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