export enum EstadoSolicitud{
    Aprobada = 1,
    Rechazada = 2,
}

export const valuesEstadoSolicitud = Object.values(EstadoSolicitud).filter(value => typeof value === 'string');
