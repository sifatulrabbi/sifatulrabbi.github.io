import express from "express";
import cors from "cors";

import router from "./routers";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routers
app.use("/api", router);

export default app;
