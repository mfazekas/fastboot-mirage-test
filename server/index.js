/*jshint node:true*/

module.exports = function(app) {
  app.get('/api/foo', function(req, res) {
    res.send({ item: {id: 'foo'} });
  });
};
