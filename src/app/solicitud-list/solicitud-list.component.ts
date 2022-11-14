import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { SolicitudService } from '../app-core/api/solicitudes/solicitud.service';
import { AfinidadMagica } from '../app-core/models/enums/afinidadMagica';
import { EstadoSolicitud } from '../app-core/models/enums/estadoSolicitud';
import { GrimorioType } from '../app-core/models/enums/grimorioType';
import { Solicitud, Solicitudes } from '../app-core/models/solicitud';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  public displayedColumns = ['nombre', 'apellido', 'edad' , 'identificacion' , 'estado', 'grimorio' ,'afinidad', 'edit'];
  public dataSource: MatTableDataSource<Solicitud> = new MatTableDataSource<Solicitud>();
  private _getSolicitud$: Subject<void> = new Subject<void>();
  public listSol: Solicitud[] = [];
  public solExample = new Solicitud({
    nombre: 'holman',
    apellido: 'sanchez',
    edad: '12',
    identificacion: '1045210',
    estado: EstadoSolicitud.Aprobada,
    grimorio: GrimorioType.Sinceridad,
    afinidadMagica : AfinidadMagica.Fuego
  })

  constructor(private _solicitudService: SolicitudService) { }

  public ngOnInit(): void {
    //this.loadPage();
    this.listSol.push(this.solExample);
    this.dataSource.data = this.listSol;
  }

  // private loadPage(): void {
  //   this._getSolicitud$.pipe(
  //     switchMap(() => this._solicitudService.getSolicitudes())
  //   ).subscribe(solicitudes => {
  //     this.loadDataSource(solicitudes);
  //   });
  // }

  // private loadDataSource(solicitudes: Solicitudes): void {
  //   this.dataSource.data = solicitudes.solicitudes;
  // }

}
