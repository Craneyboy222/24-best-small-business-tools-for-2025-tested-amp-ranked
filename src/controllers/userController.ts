import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getUserProfile, registerUser } from '../services/userService';

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id;
        const userProfile = await getUserProfile(userId);
        res.json(userProfile);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const register = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { username, email, password } = req.body;
        const newUser = await registerUser({ username, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};