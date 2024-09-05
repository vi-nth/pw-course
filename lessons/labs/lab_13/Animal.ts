export class Animal {

    protected name: string;
    protected randomSpeed: number;

    constructor(name : string, maxSpeed: number) {
        this.name = name;
        this.randomSpeed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    getRandomSpeed() {
        return this.randomSpeed;
    }

    getAnimalName(){
        return this.name;
    }

}