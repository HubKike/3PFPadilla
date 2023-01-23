import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { MaterialModule } from '../material/material.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DialogoComponent } from './pages/dialogo/dialogo.component';
import { ListadoComponent } from './pages/listado/listado.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogoComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
  ]
})
export class CursosModule { }
