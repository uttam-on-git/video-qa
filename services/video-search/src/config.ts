// import 'dotenv/config';
console.log('--- DOCKER DEBUG ---');
console.log('Raw REDIS_URL from process.env:', process.env.REDIS_URL);
console.log('--- END DOCKER DEBUG ---');

const {
    npm_package_name,
    npm_package_version,
    PORT,
    LOG_LEVEL,
    LOG_STREAM,
    NODE_ENV,
    REDIS_URL,
} = process.env;

export default {
    app: {
        NAME: npm_package_name ?? 'video-search',
        VERSION: npm_package_version ?? '0.0.0',
        PORT: PORT ?? 8000,
    },
    log: {
        LEVEL: LOG_LEVEL ?? 'info',
        STREAM: LOG_STREAM ?? 'LOGS',
    },
    env: {
        DEV: typeof NODE_ENV === 'string' ? NODE_ENV === 'development' : true,
        PROD: NODE_ENV === 'production',
    },
    redis: {
        REDIS_URL: REDIS_URL ?? 'redis://localhost:6379',
    },
};