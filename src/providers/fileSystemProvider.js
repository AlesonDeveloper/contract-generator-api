const fs = require('fs');
const path = require('path');
const TemplateProvider = require('./fileSystemProvider.interface');

class FileSystemTemplateProvider extends TemplateProvider {
  async getTemplate(templateName) {
    const templatePath = path.join(__dirname, '..', '..', 'templates', `${templateName}.html`);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found: ${templateName}`);
    }

    return fs.readFileSync(templatePath, 'utf8');
  }

  async getWatermarkBase64() {
    const watermarkPath = path.join(__dirname, '..', '..', 'templates', 'logo.png');

    if (!fs.existsSync(watermarkPath)) {
      throw new Error('Watermark image not found');
    }

    const base64 = fs.readFileSync(watermarkPath).toString('base64');
    return `data:image/png;base64,${base64}`;
  }
}

module.exports = FileSystemTemplateProvider;