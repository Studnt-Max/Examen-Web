import { Router } from "express";
import { sociosController } from "../controller/sociosController";
import { sociosService } from "../db/cafeDB"; 
import { sociosHandler } from "../handlers/sociosHandler";

const router = Router();
const SociosController = new sociosController(sociosService);
const SociosHandler = new sociosHandler(SociosController);

// Ruta de login
router.post('/login', sociosHandler.login.bind(SociosHandler));

export default router;