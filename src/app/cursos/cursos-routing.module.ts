import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListadoComponent } from './pages/listado/listado.component';

const route: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'listado', component: ListadoComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class CursosRoutingModule { }
