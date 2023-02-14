import http from "http"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import mailerRouter from "./mailer"

const app = express()
const server = http.createServer(app)

app.use(
  helmet({
    noSniff: true,
    xssFilter: true,
  }),
)

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
)

app.use("/api/v1", mailerRouter)

server.listen(8000, () => {
  console.log("Server started")
})
