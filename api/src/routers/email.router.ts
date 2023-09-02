import { Router } from "express";
import { emailService } from "../services";

const emailRouter = Router();

// checking the route
emailRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Email service is working" });
});

// sending email router
emailRouter.post("/", (req, res, next) => {
    emailService.sendMail(req.body, (err, result) => {
        if (err) {
            // checking if the err object is present
            next(err); // sending a bad request error
        } else if (!result) {
            // sending a internal error
            res.status(500).json({ message: "Unable to sent email" });
        } else {
            // sending email successfully sent
            res.status(200).json({ message: "Success" });
        }
    });
});

export default emailRouter;
