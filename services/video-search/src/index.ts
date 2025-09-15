import app from './app.js';
import config from './config.js';
import log from './log.js';

const { PORT } = config.app;

app.listen(PORT, () => {
    log.info(`Listening on port ${PORT}`);
});