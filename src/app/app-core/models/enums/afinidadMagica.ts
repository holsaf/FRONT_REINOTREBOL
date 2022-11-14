export enum AfinidadMagica {
    Oscuridad = 1,
    Luz = 2,
    Fuego = 3,
    Agua = 4,
    Viento = 5,
    Tierra = 6,
}

export const valuesAfinidadMagica = Object.values(AfinidadMagica).filter(value => typeof value === 'string');
