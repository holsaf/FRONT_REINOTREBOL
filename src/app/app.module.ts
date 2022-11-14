import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from '../app/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrarComponent } from './registrar/registrar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudCreateComponent } from './solicitud-create/solicitud-create.component';
import { SolicitudActualizarComponent } from './solicitud-actualizar/solicitud-actualizar.component';
import { SolicitudRegistrarComponent } from './solicitud-registrar/solicitud-registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RegistrarComponent,
    ActualizarComponent,
    SolicitudListComponent,
    SolicitudCreateComponent,
    SolicitudActualizarComponent,
    SolicitudRegistrarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
