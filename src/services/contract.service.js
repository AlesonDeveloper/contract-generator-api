const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const FileSystemProvider = require('./templateProvider/fileSystemProvider');
const logger = require('../config/logger');

class ContractService {
  constructor(fileSystem = new FileSystemProvider()) {
    this.fileSystem = fileSystem;
  }

  async generateContract(templateName, data) {
    logger.info('Generating contract...');

    const templateHtml = await this.fileSystem.getTemplate(templateName);
    const watermarkBase64 = await this.fileSystem.getWatermarkBase64();

    // Compile template with Handlebars
    const template = handlebars.compile(templateHtml);
    const html = template({ ...data, watermarkBase64 });

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
    });

    await browser.close();

    logger.info('Contract generated successfully');

    return pdfBuffer;
  }
}

module.exports = ContractService;