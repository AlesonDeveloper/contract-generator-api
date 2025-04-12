const swaggerJsdoc = require('swagger-jsdoc');
const { getAllTemplatesConfig } = require('../registry/templatesRegistry');

function buildSwaggerSpec() {
  const templates = getAllTemplatesConfig();

  const paths = {};

  Object.keys(templates).forEach(templateName => {
    const { description, examplePayload } = templates[templateName];

    paths[`/api/generate-contract/${templateName}`] = {
      post: {
        tags: ['Contract'],
        summary: description,
        security: [{ ApiKeyAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              example: examplePayload,
            },
          },
        },
        responses: {
          200: {
            description: 'PDF gerado com sucesso',
            content: {
              'application/pdf': {
                schema: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
          422: {
            description: 'Erro de validação',
          },
          401: {
            description: 'Chave de API inválida',
          },
        },
      },
    };
  });

  return swaggerJsdoc({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Contract Generator API',
        version: '1.0.0',
        description: 'API para geração de contratos PDF com marca d’água dinâmica',
      },
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'x-api-key',
          },
        },
      },
      paths,
    },
    apis: [],
  });
}

module.exports = buildSwaggerSpec;