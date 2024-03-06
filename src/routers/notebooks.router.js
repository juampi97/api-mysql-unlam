import { Router } from "express";
import { addNotebooks, getNotebooks } from "../controllers/notebooks.controller.js";

const router = Router();

router.get("/", getNotebooks);

router.post("/", addNotebooks);

export default router;