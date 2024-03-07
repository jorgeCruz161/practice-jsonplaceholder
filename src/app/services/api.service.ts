import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/usuarios';
import { Todos } from '../interfaces/tareas';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: String = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.url}/users`);
  }

  obtenerUsuario(id: Number ): Observable<Users>{
    return this.http.get<Users>(`${this.url}/users/${id}`)
  }

  obtenerTareas(): Observable<Todos[]>{
    return this.http.get<Todos[]>(`${this.url}/todos`);
  }


}
