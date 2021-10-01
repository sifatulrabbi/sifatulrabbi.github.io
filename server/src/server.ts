import express from 'express';
import cors from 'cors';
import config from './config/config';
/** routers */
import worksRouter from './routers/works.router';
import skillsRouter from './routers/skills.router';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
        methods: 'GET, POST, PUT, DELETE, PATCH',
    })
);

app.use('/works', worksRouter);
app.use('/skills', skillsRouter);

app.listen(config.PORT, () => {
    console.log(`running on port http://localhost:${config.PORT}`);
});
