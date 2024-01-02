require('dotenv').config();
const express = require('express');
const app = express();
const Fruit = require('./models/Fruit.js');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('once', () => {
  console.log('Connected to Mongo');
});

//Main Page
app.get('/', (req, res) => {
  res.render('Main');
});

//All Fruits Page
app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('Fruits', {
      fruits: allFruits,
    });
  });
});
app.post('/fruits', (req, res) => {
  if (req.body.edible === 'on') {
    req.body.edible = true;
  } else {
    req.body.edible = false;
  }
  console.log(req.body);
  Fruit.create(req.body, (err, createdFruit) => {
    console.log(err);
    res.redirect('/fruits');
  });
});

//New Fruits Page
app.get('/fruits/new', (req, res) => {
  res.render('NewFruits');
});

//Fruit Page
app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('Fruit', {
      fruit: foundFruit,
    });
  });
});
app.delete('/fruits/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/fruits');
  });
});
app.put('/fruits/:id', (req, res) => {
  if (req.body.edible === 'on') {
    req.body.edible = true;
  } else {
    req.body.edible = false;
  }
  console.log(req.body);
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
    console.log(updatedFruit);
    res.redirect(`/fruits`);
  });
});

//Edit Fruits Page
app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    if (!err) {
      res.render('EditFruit', {
        fruit: foundFruit,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
