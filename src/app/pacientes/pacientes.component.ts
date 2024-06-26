
import { Component, OnInit } from '@angular/core';
import { PacientesService } from './pacientes.service';
import { Paciente } from './paciente.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Paciente[] = [];
  menoresDeEdad: number = 0;

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {
    this.pacientesService.getPacientes().subscribe(data => {
      this.pacientes = data;
      this.menoresDeEdad = this.pacientes.filter(paciente => paciente.edad < 18).length;
    });
  }
}



