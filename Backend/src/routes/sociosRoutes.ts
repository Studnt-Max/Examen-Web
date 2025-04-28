import { Router } from "express";
import { sociosController } from "../controller/sociosController";
import { sociosService } from "../db/cafeDB"; 
import { sociosHandler } from "../handlers/sociosHandler";

const router = Router();
const SociosController = new sociosController(sociosService);
const SociosHandler = new sociosHandler(SociosController);

// Ruta de login
router.post('/login', SociosHandler.login.bind(SociosHandler));

// Ruta para obtener todos los miembros 
router.get('/', SociosHandler.getAllMembers.bind(SociosHandler));

// Ruta para obtener un miembro específico 
router.get('/:membershipNumber', SociosHandler.getMemberByMembershipNumber.bind(SociosHandler));

// Ruta para verificar el estado de una membresía 
router.get('/:membershipNumber/status', SociosHandler.checkMembershipStatus.bind(SociosHandler));

export default router;