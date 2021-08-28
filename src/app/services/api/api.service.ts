import { Injectable } from '@angular/core';

import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://afternoon-thicket-13249.herokuapp.com/https://poli-eventos-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  onLogin(form: LoginInterface):Observable<ResponseInterface>{
    let direccion = this.url + "organizadordirectivo/login/"
    return this.http.post<ResponseInterface>(direccion, form);
  }
}
