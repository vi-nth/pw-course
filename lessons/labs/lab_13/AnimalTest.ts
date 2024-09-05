import { AnimalController } from "./AnimalController";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Tiger } from "./Tiger";

let animalController: AnimalController = new AnimalController();

let dog: Dog = new Dog("Dog");
let horse: Horse = new Horse("Horse");
let tiger: Tiger = new Tiger("Tiger");

animalController.getWinerAnimal([dog, horse, tiger]);