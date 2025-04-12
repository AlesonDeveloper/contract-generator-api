const AppError = require('../utils/appError');

function apiKeyAuthMiddleware(req, res, next) {
  const apiKey = req.header('x-api-key');
  const validApiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new AppError('API key is missing.', 401);
  }

  if (!apiKey || apiKey !== validApiKey) {
    throw new AppError('Unauthorized: Invalid or missing API key', 401);
  }

  next();
}

module.exports = apiKeyAuthMiddleware;