import { Router } from "express";
import { addProyectores, getProyectores } from "../controllers/proyectores.controller.js";

const router = Router();

router.get("/", getProyectores);

router.post("/", addProyectores);

export default router;