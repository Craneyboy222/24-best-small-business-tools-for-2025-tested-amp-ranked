import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getTools, getToolById, submitTool } from '../services/toolService';

export const listTools = async (req: Request, res: Response) => {
    try {
        const tools = await getTools(req.query);
        res.json(tools);
    } catch (error) {
        console.error('Error retrieving tools:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getTool = async (req: Request, res: Response) => {
    try {
        const toolId = parseInt(req.params.id, 10);
        const tool = await getToolById(toolId);
        res.json(tool);
    } catch (error) {
        console.error('Error retrieving tool:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const submitNewTool = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, description, category, website_url } = req.body;
        const newTool = await submitTool({ name, description, category, website_url });
        res.status(201).json(newTool);
    } catch (error) {
        console.error('Error submitting tool:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};