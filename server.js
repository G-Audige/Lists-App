require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('components'));
const Item = require('./models/Item.js');
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

//
app.get('/', (req, res) => {
  res.render('Main');
});

//list
app.get('/list', (req, res) => {
  Item.find({}, (err, allItems) => {
    res.render('List', {
      items: allItems,
    });
  });
});
app.post('/list', (req, res) => {
  console.log(req.body);
  Item.create(req.body, (err, ceratedItem) => {
    console.log(err);
    res.redirect('/list');
  });
});

//list/new
app.get('/list/new', (req, res) => {
  res.render('New');
});

//list/:id
app.get('/list/:id', (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render('View', {
      item: foundItem,
    });
  });
});
app.delete('/list/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/list');
  });
});
app.put('/list/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
    console.log(updatedItem);
    res.redirect(`/list/${req.params.id}`);
  });
});

//list/:id/edit
app.get('/list/:id/edit', (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    if (!err) {
      res.render('Edit', {
        item: foundItem,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
