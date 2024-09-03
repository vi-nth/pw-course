import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Tiger } from "./Tiger";

let animal: Animal = new Animal("", 0);

let dog: Dog = new Dog("Dog", 60);
let horse: Horse = new Horse("Horse", 75);
let tiger: Tiger = new Tiger("Tiger", 100);

animal.getWinerAnimal([dog, horse, tiger]);