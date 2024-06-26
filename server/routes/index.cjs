const usersRoutes = require('./usersRoutes.cjs');
const placesRoutes = require('./placesRoutes.cjs');
const categoriesRoutes = require('./categoriesRoutes.cjs');
module.exports = function (app, db) {
  usersRoutes(app, db);
  placesRoutes(app, db);
  categoriesRoutes(app, db);
};
