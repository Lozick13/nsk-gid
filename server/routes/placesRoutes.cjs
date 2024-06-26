const { ObjectId } = require('mongodb');
module.exports = function (app, db) {
  const places = db.collection('places');
  const updateRatings = async () => {
    const listPlaces = await places.find().toArray();

    listPlaces.forEach(place => {
      let sum = 0;

      place.reviews.forEach(review => {
        sum += review.rating;
      });

      const avgRating = Math.floor(sum / place.reviews.length);
      places.updateOne({ _id: place._id }, { $set: { rating: avgRating } });
    });
  };

  app.get('/api/places', async (req, res) => {
    let sortType = req.query.sortType || 'rating';
    let sortOrder = req.query.sortOrder || 'decreasing';
    let searchData = req.query.searchData || '';

    try {
      let sortQuery = {};
      let filter = {};

      sortQuery[sortType] = sortOrder === 'decreasing' ? -1 : 1;

      await updateRatings();

      if (searchData) {
        filter = {
          $or: [{ name: { $regex: `.*${searchData}.*`, $options: 'i' } }],
        };
      }

      const listPlacesWithRatings = await places.find(filter).sort(sortQuery).toArray();

      res.send(listPlacesWithRatings);
    } catch (e) {
      console.log(e);
      res.status(500).send('Ошибка при обновлении и получении списка мест');
    }
  });

  app.get('/api/place/:id', async (req, res) => {
    try {
      const place = await places.findOne({ _id: new ObjectId(req.params.id) });

      res.send(place);
    } catch (e) {
      console.log(e);
    }
  });

  app.post('/api/place/:id', async (req, res) => {
    try {
      const place = await places.updateOne(
        { _id: new ObjectId(req.params.id) },
        {
          $push: {
            reviews: {
              user_id: new ObjectId(req.body.id),
              text: req.body.text,
              rating: req.body.rating,
            },
          },
        },
      );

      res.send(place);
    } catch (e) {
      console.log(e);
    }
  });
};
