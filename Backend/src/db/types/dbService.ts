import { Socio } from "../cafeDB";

export interface IDBService {
    findByCredentials(NombreCompleto: string, Contrasenia: string): Promise<Socio | null>;
    getAllMembers(): Promise<Socio[]>;
    getMemberByMembershipNumber(NumMembresia: string): Promise<Socio | null>;
    checkMembershipExists(NumMembresia: string): Promise<boolean>;
}