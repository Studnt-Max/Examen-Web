export interface Socio {
    Usuario: string,
    Contrasenia: string,
    NombreCompleto: string,
    NumMembresia: string
}

class SociosService {
    private sociosDB : Socio[] = [
        {   Usuario: "sandra.g",
            Contrasenia: "latte123",
            NombreCompleto: "Sandra García",
            NumMembresia: "5001"
        },
        {   Usuario: "roberto.m",
            Contrasenia: "capuccino456",
            NombreCompleto: "Roberto Martínez",
            NumMembresia: "5002"
        },
        {   Usuario: "esteban.l",
            Contrasenia: "espresso789",
            NombreCompleto: "Esteban López",
            NumMembresia: "5003"
        }
    ]

    async findByCredentials(username: string, password: string): Promise<Socio | null> {
        return this.sociosDB.find(socio => 
            socio.NombreCompleto === username && socio.Contrasenia === password
        ) || null;
    }

    async getAllMembers(): Promise<Socio[]> {
        return [...this.sociosDB];
    }

    async getMemberByMembershipNumber(NumMembresia: string): Promise<Socio | null> {
        return this.sociosDB.find(n => n.NumMembresia === NumMembresia) || null;
    }

    async checkMembershipExists(NumMembresia: string): Promise<boolean> {
        return this.sociosDB.some(n => n.NumMembresia === NumMembresia);
    }
}

export const sociosService = new SociosService()