
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Solicitudes } from '../../models/solicitud';
import { ApiModel } from './solicitud.api.models';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private _baseUrl = environment.solicitudApiUrl;

  constructor(private _http: HttpClient) { }

  public getSolicitudes(): Observable<Solicitudes> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    return this._http
      .get<ApiModel.SolicitudCollection>(
        `${this._baseUrl}`,
        {
          headers
        })
      .pipe();     
  }

}
