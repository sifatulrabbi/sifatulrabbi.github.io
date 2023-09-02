import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const config = {
    PORT: parseInt(process.env.PORT || "8080"),
    NODE_ENV: process.env.NODE_ENV || "development",
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
};

export default config;
