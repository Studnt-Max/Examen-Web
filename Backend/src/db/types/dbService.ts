import { Socio } from "../cafeDB";

export interface IDBService {
    findByCredentials(NombreCompleto: string, Contrasenia: string): Promise<Socio | null>;
}