//J'apprends à créer des classes en javascript


/**
 * Comment déclarer une classe ?
 * Pour déclarer 
 * 1.Je commence par le mot-clé class
 * 2.Je donne un nom à la classe . L²e nom de la classe doit commencer par une lettre majusucule
 * 3.Je définis les propriétes et les méthodes de la classe
 */


//Ma classe personne
class Personne{

    //Je définis le constructeur de la classe personne
    constructor(nomPersonne, villagePersonne, anneNaissance){

        // Le propriéte d'une personne sont : nom , village , année de naissance
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneNaissance
    }


    // Méthode
    bienvenue(){
        alert("Bienvenue " + this.nom);
    
    }

    calculeAge(){
        let anneCourante = new Date().getFullYear();
        return anneCourante - this.annee
    }

    age(){
        alert("Vous avez "+ this.calculeAge() + " ans");
    }
}






//J'utilise la classe personne pour créer une instance (Exemplaire) de personne . Notre personne s'appelle ALI . Il habite à combani . Il est né le 1999.

let personne1 = new Personne("Ali", "Combani",1999);

// Je faist 
personne1.bienvenue();
console.log(personne1);

personne1.age();



let personne2 =new Personne ("Fatima", "Chiconi", 2014);
console.log(personne2);
personne2.age();

console.log("personne2 : " , personne2);
