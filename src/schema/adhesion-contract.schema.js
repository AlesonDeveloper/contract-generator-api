const yup = require('yup');

const adhesionContractSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  thirdPartyCompanyName: yup.string().required('Nome da empresa é obrigatório'),
  thirdPartyCompanyCnpj: yup.string().required('CNPJ da empresa é obrigatório'),
  thirdPartyCompanyCity: yup.string().required('Cidade da empresa é obrigatória'),
  thirdPartyCompanyState: yup.string().required('Estado da empresa é obrigatório'),
  thirdPartyCompanyAddress: yup.string().required('Endereço da empresa é obrigatório'),
  assetSigla: yup.string().required('Sigla do ativo é obrigatória'),
  contractCity: yup.string().required('Cidade do contrato é obrigatória'),
  contractDate: yup.string().required('Data do contrato é obrigatória'),
  signatureName: yup.string().required('Nome da assinatura é obrigatório'),
});

module.exports = adhesionContractSchema;