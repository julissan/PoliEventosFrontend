import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { EventoInterface } from '../../models/evento.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editarevento',
  templateUrl: './editarevento.component.html',
  styleUrls: ['./editarevento.component.css']
})
export class EditareventoComponent implements OnInit {

  evento: EventoInterface | undefined;
  editarForm = new FormGroup({
    nombreEvento: new FormControl(''),
    fechaInicio: new FormControl(''),
    fechaFin: new FormControl(''),
    fueRealizado: new FormControl(''),
    motivoDeNoRealizacion: new FormControl(''),
    encuestaEvento: new FormControl(''),
    resultadosEncuesta: new FormControl(''),
    idOrganoInstitucional: new FormControl(''),
    idEscuela: new FormControl(''),
    idPrograma: new FormControl(''),
    idOrganizadorEvento: new FormControl('')
  });

  constructor(private router:Router, private activerouter:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    if(id){
      this.api.getEventoById(id).subscribe(data =>{
        console.log(data);
        this.evento = data;
        this.editarForm.setValue({
          nombreEvento: this.evento?.nombreEvento,
          fechaInicio: this.evento?.fechaInicio,
          fechaFin: this.evento?.fechaFin,
          fueRealizado: this.evento?.fueRealizado,
          motivoDeNoRealizacion: this.evento?.motivoDeNoRealizacion,
          encuestaEvento: this.evento?.encuestaEvento,
          resultadosEncuesta: this.evento?.resultadosEncuesta,
          idOrganoInstitucional: this.evento?.idOrganoInstitucional,
          idEscuela: this.evento?.idEscuela,
          idPrograma: this.evento?.idPrograma,
          idOrganizadorEvento: this.evento?.idOrganizadorEvento
        })
        console.log(this.editarForm.value);
      });
    }
  }

}
