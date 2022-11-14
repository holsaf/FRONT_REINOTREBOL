import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SolicitudActualizarComponent } from './solicitud-actualizar/solicitud-actualizar.component'; 
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudRegistrarComponent } from './solicitud-registrar/solicitud-registrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SolicitudActualizarComponent,
    SolicitudListComponent,
    SolicitudRegistrarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
