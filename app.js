const express = require('express');
const cors = require('cors');
const contractRoutes = require('./src/routes/contract.routes');
const healthRoutes = require('./src/routes/health.routes');
const rateLimitMiddleware = require('./src/middlewares/rateLimit.middleware');
const apiKeyMiddleware = require('./src/middlewares/apiKey.middleware');
const errorHandler = require('./src/utils/errorHandler');
const requestLogger = require('./src/middlewares/requestLogger.middleware');

const swaggerUi = require('swagger-ui-express');
const buildSwaggerSpec = require('./src/config/swagger');

const app = express();

app.use(cors());
app.use(express.json());

// Rate Limit global
app.use(rateLimitMiddleware);

// Swagger
const swaggerSpec = buildSwaggerSpec();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(requestLogger);

// Routes
app.use('/health', healthRoutes);

app.use(apiKeyMiddleware)
app.use('/api', contractRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;

