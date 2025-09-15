import { createClient } from 'redis';
import config from './config.js';
import log from './log.js';

export const client = createClient({
    url: config.redis.REDIS_URL,
}).on('error', (error) => {
    log.error('Redis Client Error', error);
});

await client.connect();