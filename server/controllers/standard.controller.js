const config = require('../config');

function standardController (options) {

  if (!options.req || !options.res || !options.view) {
    console.error('req, res & view parameters are required');
    return;
  }

  try {
    options.res.render(options.view, options.res);
  } catch (err) {
    console.log('Error', err);
  }
  // LocationService.get().then((response) => {
  //   return res.render('pages/local', response);
  // });

}

module.exports = standardController;
