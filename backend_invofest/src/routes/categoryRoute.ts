import express from "express";
import { createCategories, deleteCategories, getCategories, showCategories, updateCategories } from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategories); //menyimpan data category
router.get("/:id", showCategories); //menampilkan data category berdasarkan id
router.put("/:id", updateCategories); //mengupdate data category berdasarkan id
router.delete("/:id", deleteCategories); //menghapus data category berdasarkan id

export default router;