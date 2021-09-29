import dotenv from 'dotenv';

dotenv.config();

class Config {
    get port() {
        return process.env.PORT || '3000';
    }
}

export default new Config();
