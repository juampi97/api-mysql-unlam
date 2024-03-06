import { Router } from "express";
import { addProyector, getProyectores } from "../controllers/proyectores.controller.js";

const router = Router();

router.get("/", getProyectores);

router.post("/", addProyector);

export default router;