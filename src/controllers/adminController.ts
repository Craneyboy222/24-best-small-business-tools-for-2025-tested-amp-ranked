import { Request, Response } from 'express';
import { getPendingTools, approveTool } from '../services/adminService';

export const listPendingTools = async (req: Request, res: Response) => {
    try {
        const pendingTools = await getPendingTools();
        res.json(pendingTools);
    } catch (error) {
        console.error('Error fetching pending tools:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const approveToolSubmission = async (req: Request, res: Response) => {
    try {
        const toolId = parseInt(req.params.id, 10);
        await approveTool(toolId);
        res.status(204).send();
    } catch (error) {
        console.error('Error approving tool:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};