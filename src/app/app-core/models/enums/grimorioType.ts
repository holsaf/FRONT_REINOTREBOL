export enum GrimorioType {
    Sinceridad = 1,
    Esperanza = 2,
    Amor = 3,
    BuenaFortuna = 4,
    Desesperación = 5,
}

export const valuesGrimorioType = Object.values(GrimorioType).filter(value => typeof value === 'string');
