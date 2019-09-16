import {Demande} from './demande';
import {Emprunt} from './emprunt';

export class Student {
  id: number;
  prenom: string ;
  nom :string ;
  email :string ;
  telephone :string ;
  cin :string ;
  cne :number ;
  photo:string;
  demandeList: Demande;
  empruntList: Emprunt;
}
