import { Router } from "express"
import * as controller from "./mailer.controller"

const router = Router()

router.post("/mailer", controller.sendANewEmail)

export default router
