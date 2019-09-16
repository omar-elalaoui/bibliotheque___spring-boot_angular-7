import {Book} from './book';
import {Student} from './student';

export class Demande {
  id: number;
  date_demande: Date;
  book:Book;
  student: Student;
}
