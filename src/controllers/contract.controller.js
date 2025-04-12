const ContractService = require('../services/contract.service');

async function generateContract(req, res, next) {
  try {
    const { templateName } = req.params;
    const contractService = new ContractService();

    const pdfBuffer = await contractService.generateContract(templateName, req.body);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=contract.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    next(error);
  }
}

module.exports = { generateContract };