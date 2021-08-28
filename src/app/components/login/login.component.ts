import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginInterface } from '../../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correoOrganizadorDirectivo: new FormControl('', Validators.required),
    contraseñaOrganizadorDirectivo: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onLogin(form: LoginInterface){
    this.api.onLogin(form).subscribe(data => {
      console.log(data);
    });
  }

}