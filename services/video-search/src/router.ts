import express from 'express';
import { client } from './db.js';

const router = express.Router();

router.get('/healthcheck', async (req, res) => {
    try {
        const start = Date.now();
        await client.ping();
        const ms = Date.now() - start;
        res.status(200).send({
            status: 'ok',
            redis: {
                status: 'ok',
                ms,
            },
        });
    } catch (e) {
        res.status(500).send({
            status: 'error',
            redis: {
                status: 'error',
            },
        });
    }
});

export default router;