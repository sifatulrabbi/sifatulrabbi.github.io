import { Router } from 'express';
import controller from '../controllers/skills.controller';

const skillsRouter = Router();

skillsRouter.get('/', async (req, res) => {
    try {
        const skills = await controller.getSkills();
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

export = skillsRouter;
