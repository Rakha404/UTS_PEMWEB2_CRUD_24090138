import express from "express";
import { createEvent, deleteEvent, getEvent, showEvent, updateEvents } from "../controllers/eventController";

const router = express.Router();

router.get("/", getEvent);
router.post("/", createEvent); //menyimpan data event
router.get("/id", showEvent); //menampilkan data event berdasarkan id
router.put("/:id", updateEvents); //mengupdate data event berdasarkan id
router.delete("/:id", deleteEvent); //menghapus data event berdasarkan id

export default router;
