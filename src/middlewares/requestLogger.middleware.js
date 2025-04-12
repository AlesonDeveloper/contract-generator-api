const logger = require('../config/logger');

const requestLogger = (req, res, next) => {
  const { method, originalUrl } = req;
  const start = Date.now();

  res.on('finish', () => {
    const { statusCode } = res;
    const duration = Date.now() - start;

    logger.info(`${method} ${originalUrl} ${statusCode} - ${duration}ms`);
  });

  next();
};

module.exports = requestLogger;