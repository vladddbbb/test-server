const status = require('../src/health/routes');

module.exports = (app) => {
  app.use('/status', status);
  // app.use('/users', validateAuth.checkIfAuthenticated, getData.getGeoip, users);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
