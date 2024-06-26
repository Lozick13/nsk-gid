const { ObjectId } = require('mongodb');
module.exports = function (app, db) {
  const users = db.collection('users');

  app.get('/api/user/email/:email', async (req, res) => {
    try {
      const selectUser = await users.findOne({ email: req.params.email });

      res.send(selectUser);
    } catch (e) {
      console.log(e);
    }
  });
  app.get('/api/user/id/:id', async (req, res) => {
    try {
      const selectUser = await users.findOne({ _id: new ObjectId(req.params.id) });

      res.send(selectUser);
    } catch (e) {
      console.log(e);
    }
  });

  app.post('/api/users', async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };

      await users.insertOne(user);
      res.send(req.body);
    } catch (e) {
      console.log(e);
    }
  });
};
