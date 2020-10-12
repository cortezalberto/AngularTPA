import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseEndpoint = 'http://localhost:9002/api/v1/alumno';

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseEndpoint);
  }

  public ver(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.baseEndpoint}/${id}`);
  }

  public crear(alumno: Alumno): Observable<Alumno> {
    console.log(alumno);
    console.log(this.baseEndpoint);
    return this.http.post<Alumno>(this.baseEndpoint + "/", alumno,
      { headers: this.cabeceras });
  }

  public editar(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.baseEndpoint}/${alumno.id}`, alumno,
      { headers: this.cabeceras });
  }

  public eliminar(alumno: Alumno): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${alumno.id}`);
  }
}
