import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VereventosComponent } from './components/vereventos/vereventos.component';
import { InscripcioneventoComponent } from './components/inscripcionevento/inscripcionevento.component';
import { SeleccionarrolComponent } from './components/seleccionarrol/seleccionarrol.component';
import { HomeorganizadorComponent } from './components/homeorganizador/homeorganizador.component';
import { CreareventoComponent } from './components/crearevento/crearevento.component';
import { VereventosorgComponent } from './components/vereventosorg/vereventosorg.component';
import { OpcioneseventoComponent } from './components/opcionesevento/opcionesevento.component';
import { EditareventoComponent } from './components/editarevento/editarevento.component';
import { BorrareventoComponent } from './components/borrarevento/borrarevento.component';
import { AgregarregistroComponent } from './components/agregarregistro/agregarregistro.component';
import { ReporteeventoComponent } from './components/reporteevento/reporteevento.component';
import { HomedirectivoComponent } from './components/homedirectivo/homedirectivo.component'


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'ver-eventos', component:VereventosComponent}, //invitado
  {path:'inscripcion-evento', component:InscripcioneventoComponent}, //invitado
  {path:'rol', component:SeleccionarrolComponent}, //post login si tiene ambos roles
  {path:'home-organizador', component:HomeorganizadorComponent}, //home organizador
  {path:'crear-evento', component:CreareventoComponent}, //crear evento organizador
  {path:'ver-eventos-org', component:VereventosorgComponent}, //ver evento organizador
  {path:'opciones-evento/:id', component:OpcioneseventoComponent}, //opciones evento organizador
  {path:'editar-evento/:id', component:EditareventoComponent}, //editar evento organizador
  {path:'borrar-evento/:id', component:BorrareventoComponent}, //borrar evento organizador
  {path:'agregar-registro/:id', component:AgregarregistroComponent}, //agregar registro organizador
  {path:'reporte-evento/:id', component:ReporteeventoComponent}, //generar reporte organizador
  {path:'home-directivo', component:HomedirectivoComponent} //home directivo
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
  InscripcioneventoComponent,
  SeleccionarrolComponent,
  HomeorganizadorComponent,
  CreareventoComponent,
  VereventosorgComponent,
  OpcioneseventoComponent,
  EditareventoComponent,
  BorrareventoComponent,
  AgregarregistroComponent,
  ReporteeventoComponent,
  HomedirectivoComponent
  
]