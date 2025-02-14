import express from "express";
import { s } from "../controllers/ai.controller.js";

const router = express.Router();
router.post("/get-review", s);

export { router };
