import Food from './food/food';
import IAnimal from './animal.interface';

// Créer une class Animal qui implémente l'interface IAnimal
// par défaut, la méthode eat augmente le poids de l'animal de 10
// par défaut, la méthode sleep réduit le poids de l'animal de 10
// le poids d'un animal ne peut pas être négatif

export default class Animal implements IAnimal {

    poids:number;

    constructor(poids:number){
      this.poids = poids;
    }

    eat():void{
      this.poids=+10
    }

    sleep():void{
      if(this.poids - 10 > 0 ){
        this.poids=-10
      }
    }

}
