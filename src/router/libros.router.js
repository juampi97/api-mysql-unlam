import { Router } from "express";
import { addLibro, getLibros } from "../controllers/libros.controller.js";

const router = Router();

router.get("/", getLibros);

router.post("/", addLibro);

export default router;