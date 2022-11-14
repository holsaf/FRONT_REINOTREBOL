import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudRegistrarComponent } from './solicitud-registrar/solicitud-registrar.component';
import { SolicitudActualizarComponent } from './solicitud-actualizar/solicitud-actualizar.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path: 'registrar',
    component: SolicitudRegistrarComponent,
  },
  {
    path: 'actualizar',
    component: SolicitudActualizarComponent,
  },
  {
    path: 'list',
    component: SolicitudListComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
