import { Router } from "express";
import { addNotebook, getNotebooks } from "../controllers/notebooks.controller.js";

const router = Router();

router.get("/", getNotebooks);

router.post("/", addNotebook);

export default router;