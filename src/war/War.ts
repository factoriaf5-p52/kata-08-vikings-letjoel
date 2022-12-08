import {Saxon} from '../saxon/Saxon'
import {Viking} from '../viking/Viking'

export class War{

    vikingArmy: Array<Viking>;
    saxonArmy: Array<Saxon>;

    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }  

   public addViking(myNewViking: Viking){

    this.vikingArmy.push(myNewViking);
   }

   public addSaxon(myNewSaxon: Saxon){
    this.saxonArmy.push(myNewSaxon);
   }

   public vikingAttack(){

    if (this.saxonArmy.length > 0) {
        
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

        let battleResult = saxonSoldier.receiveDamage(vikingSoldier.strength);

        if (battleResult == 'A Saxon has died in combat') {
            this.saxonArmy = this.saxonArmy.filter(saxon => saxon !== saxonSoldier)
            return 'A Saxon has died in combat'
        }

    }else {
        //
    }
   }
   public saxonAttack(){

    if (this.vikingArmy.length > 0) {

        let vikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        console.log(vikingSoldier);
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        console.log(saxonSoldier);
        let battleResult = vikingSoldier.receiveDamage(saxonSoldier.strength);
        console.log(battleResult);
        console.log(`\n`);
        if (battleResult == vikingSoldier.name + ' has died in act of combat') {
   
            this.vikingArmy = this.vikingArmy.filter(viking => viking !== vikingSoldier)
            return 'A Viking has died in combat'
        }else{
            return vikingSoldier.name + ' has received ' + saxonSoldier.strength + ' points of damage'
            //que pasa si no lo mata
        }
    }else {
        //
    }


   }
   public showStatus(){
    
    if (this.saxonArmy.length <= 0) {
        return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length <= 0) {
        return "Saxons have fought for their lives and survive another day...";
    }
    return "Vikings and Saxons are still in the thick of battle."

   }
 
}