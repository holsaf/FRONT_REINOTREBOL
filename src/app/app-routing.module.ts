import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: SolicitudListComponent,
  },
  {
    path: '',
    component: SolicitudListComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
