import { Component, OnInit } from '@angular/core';
import { PacientesService } from './pacientes/pacientes.service';
import { Paciente } from './pacientes/paciente.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes/pacientes.component.html',
  styleUrls: ['./pacientes/pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
menoresDeEdad: any;

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }
}