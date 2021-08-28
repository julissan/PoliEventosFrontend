import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VereventosComponent } from './components/vereventos/vereventos.component';
import { InscripcioneventoComponent } from './components/inscripcionevento/inscripcionevento.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'vereventos', component:VereventosComponent},
  {path:'inscripcionevento', component:InscripcioneventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  LoginComponent,
  VereventosComponent,
  InscripcioneventoComponent
]