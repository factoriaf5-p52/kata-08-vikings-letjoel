export class Soldier {

    health: number;
    strength: number;

    constructor(health: number, strength:number) {
        this.health = health;
        this.strength = strength;
    }

    public attack(){
        return this.strength;
    }

    public receiveDamage(damage: number){
        this.health = this.health-damage;
    }

}