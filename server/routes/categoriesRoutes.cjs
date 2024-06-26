const { ObjectId } = require('mongodb');
module.exports = function (app, db) {
  const categories = db.collection('categories');

  app.get('/api/categories/:id', async (req, res) => {
    try {
      const selectCategory = await categories.findOne({
        _id: new ObjectId(req.params.id),
      });

      res.send(selectCategory);
    } catch (e) {
      console.log(e);
    }
  });
};
