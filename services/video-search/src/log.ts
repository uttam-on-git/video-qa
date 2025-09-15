import config from './config.js';
import winston from 'winston';

const logger = winston.createLogger({
    level: config.log.LEVEL.toLowerCase(),
    format: winston.format.json(),
    defaultMeta: { service: config.app.NAME },
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

export default logger;