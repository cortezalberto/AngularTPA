import { Alumno } from './alumno';
import { Examen } from './examen';

export class Curso {
    id: number;
    nombre: string;
    createAt: Date;
    alumnos: Alumno[] = [];
    examenes: Examen[] = [];
}
