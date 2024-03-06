import { Router } from "express";
import { addInstrumentos, getInstrumentos } from "../controllers/instrumentos.controller.js";

const router = Router();

router.get("/", getInstrumentos);

router.post("/", addInstrumentos);

export default router;