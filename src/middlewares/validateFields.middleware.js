const AppError = require('../utils/appError');
const { getTemplateConfig } = require('../registry/templatesRegistry');

function validateFields() {
  return async (req, res, next) => {
    try {
      const { templateName } = req.params;
      const { schema } = getTemplateConfig(templateName);

      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = error.inner.map(err => ({
          field: err.path,
          message: err.message,
        }));
        return next(new AppError('Erro de validação nos campos.', 422, errors));
      }

      next(error);
    }
  };
}

module.exports = validateFields;