import express from "express";
import cors from "cors";
import "dotenv/config";
import main from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

await main();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(clerkMiddleware());

app.get("/", (request, response) => {
  response.json({ message: "PONG!" });
});

app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
