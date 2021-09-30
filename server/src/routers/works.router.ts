import { Router } from 'express';
import controller from '../controllers/works.controller';

const worksRouter = Router();

worksRouter.get('/', async (req, res) => {
    try {
        const works = await controller.getWorks();
        res.status(201).json(works);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

export = worksRouter;
