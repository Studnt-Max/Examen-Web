import { Socio } from "../db/cafeDB";
import { IDBService } from "../db/types/dbService";

export class sociosController {
    private dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async verifyCredentials(NombreCompleto: string, Contrasenia: string): Promise<Socio | null> {
        return this.dbService.findByCredentials(NombreCompleto, Contrasenia);
    }

    async getAllMembers(): Promise<Socio[]> {
        return this.dbService.getAllMembers();
    }

    async getMemberByMembershipNumber(NumMembresia: string): Promise<Socio | null> {
        return this.dbService.getMemberByMembershipNumber(NumMembresia);
    }

    async checkMembershipExists(NumMembresia: string): Promise<boolean> {
        return this.dbService.checkMembershipExists(NumMembresia);
    }
}