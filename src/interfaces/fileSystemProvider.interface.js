class FileSystemProvider {
  async getTemplate(templateName) {
    throw new Error('Method getTemplate() must be implemented');
  }

  async getWatermarkBase64() {
    throw new Error('Method getWatermarkBase64() must be implemented');
  }
}

module.exports = FileSystemProvider;