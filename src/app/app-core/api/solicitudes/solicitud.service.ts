
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { compare } from 'fast-json-patch';
import { environment } from 'src/environments/environment'
import { Solicitud, Solicitudes } from '../../models/solicitud';
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
      .pipe(
        map(ApiModel.SolicitudCollection.toModel)
        );
   
  }

  public updateSolicitud(modifiedSolicitud : Solicitud , currentSolicitud: Solicitud): Observable<Solicitud> {
    const apiCurrentSolicitud = ApiModel.Solicitud.fromModel(currentSolicitud);
    const apiModifiedSolicitud = ApiModel.Solicitud.fromModel(modifiedSolicitud);
    const operations = compare(apiCurrentSolicitud, apiModifiedSolicitud);

    if (operations.length === 0) {
      return of(modifiedSolicitud);
    }

    return this._http
      .patch<ApiModel.Solicitud>(
        `${this._baseUrl}/${currentSolicitud.idSolicitud}`,
        operations,
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json-patch+json')
            .set('Accept', 'application/json')
        })
      .pipe(
        map(ApiModel.Solicitud.toModel),
      );
  }

}
