export default class MyArray {

  // Coder une méthode oddNumbers qui prend en paramètre un tableau d'entier, et renvoie un tableau uniquement composé
  // des entiers impairs de ce dernier
  oddNumbers(arr: number[]):number[] {
    return arr.filter(item => !(item % 2 == 0))
  }

  // Coder une méthode sort qui renvoie le tableau passé en paramètre trié par ordre croissant
  sort(arr: number[]):number[] {
    return arr.sort((n1,n2) => n1 - n2);
  }

  // Coder une méthode boringFunction qui renvoie true si les string du tableaux ont toutes la même longueur,
  // ou renvoie "relou ta fonction" sinon
  boringFunction(arr: string[]): any {
    if( arr.every((item) => arr[0].length === item.length) ) {
      return true
    }
    return "relou ta fonction"
  }

  // Coder une méthode optionalArray qui renvoie true si les 2 arrays d'entiers passés en paramètres sont égaux, false sinon
  // Faire de même avec un 3e tableau passé en paramètre qui sera optionnel
  optionalArray(a:number[], b:number[], c?:number[]):boolean {
    if( a.length === b.length && a.every((v, i) => v === b[i]) ) {
      return true;
    }
    return false
  }
}
