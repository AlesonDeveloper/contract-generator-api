const adhesionContractSchema = require('../schema/adhesion-contract.schema');

const templatesRegistry = {
  'adhesion-contract': {
    path: 'adhesion-contract.html',
    schema: adhesionContractSchema,
    description: 'Geração de contrato de adquirência',
    examplePayload: {
      name: 'João Silva',
      cpf: '123.456.789-00',
      thirdPartyCompanyName: 'Empresa XYZ',
      thirdPartyCompanyCnpj: '12.345.678/0001-99',
      thirdPartyCompanyCity: 'São Paulo',
      thirdPartyCompanyState: 'SP',
      thirdPartyCompanyAddress: 'Rua Exemplo, 123',
      assetSigla: 'ASSET',
      contractCity: 'São Paulo - SP',
      contractDate: '26 de fevereiro de 2025',
      signatureName: 'João Silva',
    },
  },
};

function getTemplateConfig(templateName) {
  const config = templatesRegistry[templateName];
  if (!config) {
    throw new Error(`Template '${templateName}' não encontrado no registry.`);
  }
  return config;
}

function getAllTemplatesConfig() {
  return templatesRegistry;
}

module.exports = {
  getTemplateConfig,
  getAllTemplatesConfig,
};