import { AfinidadMagica } from 'src/app/app-core/models/enums/afinidadMagica'
import { EstadoSolicitud } from 'src/app/app-core/models/enums/estadoSolicitud'
import { GrimorioType } from 'src/app/app-core/models/enums/grimorioType'
import {
    Solicitud as ModelSolicitud, Solicitudes
} from "../../models/solicitud";

export namespace ApiModel {

    export class Solicitud {

        public idSolicitud!: string;
        public nombre!: string;
        public apellido!: string;
        public identificacion!: string;
        public edad!: string;
        public estado!: EstadoSolicitud;
        public afinidadMagica!: AfinidadMagica;
        public grimorio!: GrimorioType;

        public static toModel(solicitudApi: Solicitud): ModelSolicitud {
            return new ModelSolicitud({
                idSolicitud: solicitudApi.idSolicitud,
                nombre: solicitudApi.nombre,
                apellido: solicitudApi.apellido,
                edad: solicitudApi.edad,
                identificacion: solicitudApi.identificacion,
                estado: solicitudApi.estado,
                afinidadMagica: solicitudApi.afinidadMagica,
                grimorio: solicitudApi.grimorio,
            });
        }

        public static fromModel(solicitud: ModelSolicitud): Solicitud {
            return new Solicitud({
                idSolicitud: solicitud.idSolicitud,
                nombre: solicitud.nombre,
                apellido: solicitud.apellido,
                edad: solicitud.edad,
                identificacion: solicitud.identificacion,
                estado: solicitud.estado,
                afinidadMagica: solicitud.afinidadMagica,
                grimorio: solicitud.grimorio,
            })
        }

        public constructor(init?: Partial<Solicitud>) {
            Object.assign(this, init);
        }
    }

    export class SolicitudCollection {
        public solicitudes!: Solicitud[];

        public static toModel(solicitud: SolicitudCollection): Solicitudes {
            return new Solicitudes({
                solicitudes: solicitud.solicitudes.map(ApiModel.Solicitud.toModel)
            })
        };
    }

}
