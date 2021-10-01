import { Router } from 'express';
import controller from '../controllers/skills.controller';

const skillsRouter = Router();

skillsRouter.get('/', async (req, res) => {
    try {
        const skills = await controller.getSkills();
        res.status(201).json(skills);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

export = skillsRouter;
