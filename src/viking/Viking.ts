import {Soldier} from '../soldier/Soldier'
export class Viking extends Soldier{

    constructor(name:string, health: number, strength:number) {
        super(health,strength);
        this.name = name;
    }

        name: string;

        public receiveDamage(damage:number){

            this.health = this.health-damage;

            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            }
            if (this.health <= 0) {
                return `${this.name} has died in act of combat`
            }
        }

        public battleCry(){
            return `Odin Owns You All!`
        }

}