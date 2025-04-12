const AppError = require('./appError');
const logger = require('../config/logger');

function errorHandler(err, req, res, next) {
  if (!(err instanceof AppError)) {
    logger.error('Unexpected error:', err);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }

  logger.warn(`Handled error: ${err.statusCode} - ${err.message}`);

  return res.status(err.statusCode).json({
    status: 'fail',
    message: err.message,
    details: err.details || undefined,
  });
}

module.exports = errorHandler;