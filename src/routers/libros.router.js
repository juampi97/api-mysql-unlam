import { Router } from "express";
import { addLibros, getLibros } from "../controllers/libros.controller.js";

const router = Router();

router.get("/", getLibros);

router.post("/", addLibros);

export default router;