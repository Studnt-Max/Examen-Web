interface Socio {
    Usuario: string,
    Contrasenia: string,
    NombreCompleto: string,
    NumMembresia: string
}

class sociosService {
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

    // async ....
}

export const SociosService = new sociosService()