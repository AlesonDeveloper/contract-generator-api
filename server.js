require('dotenv').config();

const app = require('./app');
const logger = require('./src/config/logger');

const PORT = process.env.PORT || 3000;

logger.info(`Starting server on port ${PORT}...`);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});