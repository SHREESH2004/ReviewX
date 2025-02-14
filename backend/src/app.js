import express from "express";
import { router } from "./routes/ai.routes.js";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json())
// Use the router for the AI routes
app.use("/AI", router);

export { app };
