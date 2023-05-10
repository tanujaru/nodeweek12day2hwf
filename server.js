// Load express
const express = require('express');
const fruits = require('./models/fruits.js');

// Create our express app
const app = express();
//view
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine
//view
app.get('/', (req, res) => {
  res.render('template', { title: 'Animal Lovers', message: 'lets go to the animal world!! ', content: 'Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia' })
})

app.get('/about-animals', (req, res) => {
  res.render('template', { title: 'Land Animals', message: 'Conserve the Animals', content: 'The most common pets include dogs, cats, fish, and birds, but there are also many amazing exotic pets.' })
})

app.get('/sea-word', (req, res) => {
  res.render('template', { title: 'Sea World', message: 'Oceanian Animals ', content: 'The ocean is teaming with life, from the smallest shrimp to the largest animal ever, the Blue Whale!' })
})

// simple routings

 app.get('/african-animals ', function(req, res) {
   res.send("Africa is home to some of the most incredible and dangerous animals in the world.");
 });

 app.get('/asian-animals', function(req, res) {
   res.send('Asia has the world’s longest coastline, and an amazing diversity of exotic animals, birds, and more.');
 });

 app.get('/central-american', function(req, res) {
  res.send(' Discover the the nearly 400 different animals we track in Central America today.');
});
app.get('/eurasian-animals ', function(req, res) {
  res.send(' Eurasia has some of the rarest animals in the world, like Siberian Tigers and Snow Leopards.');
});
app.get('/european-animals', function(req, res) {
  res.send('We track over 500 different animals in Europe, including wolves and bears.');
});
app.get('/oceanian-animals ', function(req, res) {
  res.send('Oceania has many islands, and the world’s highest concentration of marsupials.');
});
app.get('/south-american', function(req, res) {
  res.send('Home to the stealthy Jaguar, the friendly Capybara, and many more!');
});
app.get('/fruits/', (req, res) => {
  res.send(fruits);
});

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});