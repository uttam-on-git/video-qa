import config from './config.js';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import router from './router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan(config.env.DEV ? 'dev' : 'combined'));
app.use('/api', router);

export default app;