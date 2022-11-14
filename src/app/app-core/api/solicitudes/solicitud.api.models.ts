import { AfinidadMagica } from 'src/app/app-core/models/enums/afinidadMagica'
import { EstadoSolicitud  } from 'src/app/app-core/models/enums/estadoSolicitud'
import { GrimorioType } from 'src/app/app-core/models/enums/grimorioType'
import {
    Solicitud as ModelSolicitud
} from "../../models/solicitud";


export namespace ApiModel {

    export class Solicitud {

        public idSolicitud! : string;

        public nombre! : string;

        public apellido! : string;

        public identificacion! : string;

        public edad! : string;

        public estado! : EstadoSolicitud;

        public afinidadMagica! : AfinidadMagica;

        public grimorio! : GrimorioType;

        public static toModel(solicitudApi: Solicitud ): ModelSolicitud {
            return new ModelSolicitud({
                idSolicitud: solicitudApi.idSolicitud,
                nombre : solicitudApi.nombre,
                apellido : solicitudApi.apellido,
                edad : solicitudApi.edad,
                estado : solicitudApi.estado,
                afinidadMagica : solicitudApi.afinidadMagica,
                grimorio : solicitudApi.grimorio,
            });
        }

        public static fromModel(solicitud: ModelSolicitud): Solicitud {
            return new Solicitud({
                idSolicitud: solicitud.idSolicitud,
                nombre : solicitud.nombre,
                apellido : solicitud.apellido,
                edad : solicitud.edad,
                estado : solicitud.estado,
                afinidadMagica : solicitud.afinidadMagica,
                grimorio : solicitud.grimorio,
            })
        }

        public constructor(init?: Partial<Solicitud>) {
            Object.assign(this, init);
        }
    }

    // export class solicitudItem {
    //     public solicitudId!: string;
    //     public solicitudName!: string;
    //     public solicitudType!: solicitudType;
    //     public leadStatus!: LeadStatus;
    //     public isEnable!: boolean;

    //     public static toModel(apiItem: solicitudItem): solicitudListItem {
    //         return new solicitudListItem({
    //             id: apiItem.solicitudId,
    //             name: apiItem.solicitudName,
    //             solicitudType: apiItem.solicitudType,
    //             leadStatus: apiItem.leadStatus,
    //             isEnable: apiItem.isEnable
    //         })
    //     }
    // }



    export interface SolicitudCollection {
        solicitudes : Solicitud[];
    }
}
