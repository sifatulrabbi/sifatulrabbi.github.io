import nodemailer from "nodemailer";
import config from "../config";
import type { IMail, DoneFnc, IMailSentInfo } from "../interfaces";

class EmailService {
    private readonly transporter: nodemailer.Transporter; // the transporter instance

    private readonly to: string; // the receiver email address aka my email

    private readonly headers: Record<string, string> = {
        "X-From": "sifatulrabbi.github.io", // setting header to make the email stand out
    };

    constructor() {
        // checking for the email and the password
        if (!config.SMTP_PASS || !config.SMTP_USER) {
            console.log(new Error("No smtp user information"));
            process.exit(1);
        }

        this.to = config.SMTP_USER; // setting the to
        // creating the transporter instance with necessary info
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // host name for gmail
            port: 456, // port 456 is used for secure mail transfer
            secure: true,
            auth: {
                user: config.SMTP_USER,
                pass: config.SMTP_PASS,
            },
        });

        // verify the connection and stop the app if it isn't
        this.transporter.verify((err, success) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }

            if (!success) {
                console.log(new Error("Verification unsuccessful"));
                process.exit(1);
            }

            console.log("Email service is working");
        });
    }

    // function for sending emails
    async sendMail(
        data: Omit<IMail, "header" | "to" | "html">,
        done: DoneFnc<IMailSentInfo>,
    ) {
        try {
            // creating the mail object
            const mail: IMail = {
                headers: this.headers,
                to: this.to,
                from: data.from,
                subject: data.subject,
                text: data.text,
                html: `<p>${data.text}</p>`,
                priority: "normal", // setting normal priority because the emails are not urgent
            };
            // sending the email
            const info = await this.transporter.sendMail(mail);
            // calling the done function to end the job
            done(null, info);
        } catch (err) {
            // console log the error and call the done function to end the job
            console.error(err);
            done(err, false);
        }
    }
}

export const emailService = new EmailService();
