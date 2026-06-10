import express from "express";
import { createPembicara, deletePembicara, getPembicara, showPembicara, updatePembicara } from "../controllers/pembicaraController.js";

const router = express.Router();

router.get("/", getPembicara);
router.post("/", createPembicara);
router.get("/:id", showPembicara);
router.put("/:id", updatePembicara);
router.delete("/:id", deletePembicara);

export default router;