import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  showEvent,
  updateEvents,
} from "../controllers/eventController.js";

const router = express.Router();

router.get("/", getEvent);
router.post("/", createEvent);
router.get("/:id", showEvent);
router.put("/:id", updateEvents);
router.delete("/:id", deleteEvent);

export default router;