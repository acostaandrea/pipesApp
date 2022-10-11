
export enum Color{
    rojo, negro, azul, verde
} //enum es trabajar con valores numericos pero con palabras

export interface Heroe{
    nombre: string,
    vuela: boolean,
    color: Color
}