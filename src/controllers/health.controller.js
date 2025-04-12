const healthCheck = (req, res) => {
  return res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  healthCheck,
};