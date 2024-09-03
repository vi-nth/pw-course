export class Animal {

    protected name: string;
    protected maxSpeed: number;

    constructor(name : string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
    }

    getRandomSpeed(maxSpeed : number) {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }

    getWinerAnimal(listAnimals: Animal[]) {
        let winerAnimal: string = "";
        let winerSpeed: number = 0;

        for (let animal of listAnimals) {
            let randomSpeed = this.getRandomSpeed(animal.maxSpeed);
            if (randomSpeed > winerSpeed) {
                winerSpeed = randomSpeed;
                winerAnimal = animal.name;
            }
        }
        return console.log(`Winner is ${winerAnimal}, with speed: ${winerSpeed}`);
    }

}