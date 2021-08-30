import { Injectable } from '@angular/core';

import { LoginInterface } from '../../models/login.interface';
import { ResponseLoginInterface } from '../../models/responselogin.interface';
import { ResponseInterface } from '../../models/response.interface';
import { EventoInterface } from '../../models/evento.interface'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://afternoon-thicket-13249.herokuapp.com/https://poli-eventos-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  onLogin(form: LoginInterface):Observable<ResponseLoginInterface>{
    let direccion = this.url + "organizadordirectivo/login/"
    return this.http.post<ResponseLoginInterface>(direccion, form);
  }

  getEventos():Observable<EventoInterface[]>{
    let direccion = this.url + "evento/";
    return this.http.get<EventoInterface[]>(direccion);
  }

  getEventoById(id: string):Observable<EventoInterface>{
    let direccion = this.url + "evento/" + id;
    return this.http.get<EventoInterface>(direccion);
  }

  
}
