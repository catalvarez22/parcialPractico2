import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private url = 'https://gist.githubusercontent.com/k-garces/.../pacients.json';

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.url);
  }
}