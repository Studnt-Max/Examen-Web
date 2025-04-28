import { Router } from "express";
import { sociosController } from "../controller/sociosController";
import { sociosService } from "../db/cafeDB"; 
// import sociosHandler

const router = Router();
 const SociosController = new sociosController(sociosService);
// const sociosHandler = new (SociosHandler);


export default router;