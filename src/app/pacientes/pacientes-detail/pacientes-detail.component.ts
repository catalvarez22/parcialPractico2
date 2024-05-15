import { Component, Input } from '@angular/core';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacientesDetailComponent {
  @Input() Paciente!: Paciente;
constructor() { }
}
