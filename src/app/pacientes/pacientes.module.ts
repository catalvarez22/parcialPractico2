import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacientesComponent],
  exports: [PacientesComponent]
})
export class PacientesModule { }
