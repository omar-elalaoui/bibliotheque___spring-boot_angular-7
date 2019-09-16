import {Book} from './book';
import {Student} from './student';

export class Emprunt {
  id: number;
  date_emprunt: Date;
  duree_emprunt :number;
  isReturned :boolean;
  book :Book;
  student: Student;
}
