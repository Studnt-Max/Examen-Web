import { Request, Response } from 'express';
import { sociosController } from '../controller/sociosController';

export class sociosHandler {
    constructor(private sociosController: sociosController) {}

    async login(request: Request, response: Response) {
        try {
            const { NombreCompleto, Contrasenia } = request.body;
            
            if (!NombreCompleto || !Contrasenia) {
                return response.status(400).json({ 
                    error: 'Nombre de usuario y contraseña son requeridos' 
                });
            }

            const socio = await this.sociosController.verifyCredentials(
                NombreCompleto, 
                Contrasenia
            );

            if (!socio) {
                return response.status(401).json({ 
                    error: 'Credenciales inválidas' 
                });
            }

            response.json({
                NombreCompleto: socio.NombreCompleto,
                NumMembresia: socio.NumMembresia
            });
        } catch (error) {
            response.status(500).json({ 
                error: 'Error al autenticar al miembro' 
            });
        }
    }
}