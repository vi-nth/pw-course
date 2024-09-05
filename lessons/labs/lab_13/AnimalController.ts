import { Animal } from "./Animal";

export class AnimalController {

    getWinerAnimal(listAnimals: Animal[]) {
        let winerAnimal: string = "";
        let winerSpeed: number = 0;

        for (let animal of listAnimals) {
            let randomSpeed = animal.getRandomSpeed();
            console.log(`Animal is ${animal.getAnimalName()}, with speed: ${randomSpeed}`);
            if (randomSpeed > winerSpeed) {
                winerSpeed = randomSpeed;
                winerAnimal = animal.getAnimalName();
            }
        }
        return console.log(`Winner is ${winerAnimal}, with speed: ${winerSpeed}`);
    }

}