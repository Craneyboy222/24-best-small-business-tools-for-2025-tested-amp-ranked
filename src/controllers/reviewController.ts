import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { submitReview, getReviewsForTool } from '../services/reviewService';

export const submitToolReview = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { userId, toolId, rating, comment } = req.body;
        const newReview = await submitReview({ userId, toolId, rating, comment });
        res.status(201).json(newReview);
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getReviews = async (req: Request, res: Response) => {
    try {
        const toolId = parseInt(req.params.toolId, 10);
        const reviews = await getReviewsForTool(toolId);
        res.json(reviews);
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};