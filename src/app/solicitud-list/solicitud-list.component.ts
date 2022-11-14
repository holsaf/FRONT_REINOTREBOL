import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, switchMap} from 'rxjs';
import { SolicitudService } from '../app-core/api/solicitudes/solicitud.service';
import { EstadoSolicitud, valuesEstadoSolicitud } from '../app-core/models/enums/estadoSolicitud';
import { Solicitud, Solicitudes } from '../app-core/models/solicitud';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  public displayedColumns = ['nombre', 'apellido', 'edad', 'identificacion', 'estado', 'cambiarEstado', 'grimorio', 'afinidad', 'edit'];
  public dataSource: MatTableDataSource<Solicitud> = new MatTableDataSource<Solicitud>();
  private _getSolicitud$: Subject<void> = new Subject<void>();
  private _patchSolicitud$: Subject<void> = new Subject<void>();
  public estados = valuesEstadoSolicitud;
  public initialSolicitudes: Solicitud[] = [];
  public modifiedSolicitud!: Solicitud;
  public currentSolicitud!: Solicitud;

  constructor(private _solicitudService: SolicitudService) { }

  public ngOnInit(): void {
    this.loadPage();
    this.updateEstado();
    this._getSolicitud$.next();
    this.initialSolicitudes.push(...this.dataSource.data);
  }

  private loadPage(): void {
    this._getSolicitud$.pipe(
      switchMap(() => this._solicitudService.getSolicitudes())
    ).subscribe(solicitudes => {
      this.loadDataSource(solicitudes);
    });
  }

  private updateEstado(): void {
    this._patchSolicitud$.pipe(
      switchMap(() => this._solicitudService.updateSolicitud(this.modifiedSolicitud, this.currentSolicitud))
    ).subscribe(solicitud => {
      console.log(solicitud)
      this.dataSource.data = this.dataSource.data.map((sol, i) => sol.idSolicitud == solicitud?.idSolicitud ? solicitud : sol);
    });
  }

  private loadDataSource(solicitudes: Solicitudes): void {
    this.dataSource.data = solicitudes.solicitudes;
    this.initialSolicitudes.push(...solicitudes.solicitudes);
  }

  public changeEstado(estado: string | EstadoSolicitud, data: Solicitud): void {
    let isInvalid = (estado === data.estado);
    if (!isInvalid) {
      this.modifiedSolicitud = this.dataSource.data.find(sol => sol.idSolicitud == data.idSolicitud)!;
      if (this.modifiedSolicitud != undefined) {

        this.currentSolicitud = Solicitud.copyTo(this.initialSolicitudes.find(sol => sol.idSolicitud == data.idSolicitud)!);
        this.modifiedSolicitud.estado = <EstadoSolicitud>estado;
      }
      this._patchSolicitud$.next();
    }

  }

}
