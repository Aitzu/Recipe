const express = require('express');
const app = express();

require('./config/db');
// const Recipe = require('./models/Recipe');
const recipes = [
  {
    id: "1", 
    title: "baby coconut chicken meal",
    category: "baby food",
    ingredients: "chicken breast, vegetables, coconut milk"
    //https://www.recipecommunity.com.au/baby-food-recipes/baby-coconut-chicken-meal/4wyfnaab-f9c28-481590-cfcd2-xs7vp6mu
  }, 
  {
    id: "2",
    title: "lasagne",
    category: "pasta",
    ingredients: "pasta, cheese"
    //https://www.recipecommunity.com.au/pasta-rice-dishes-recipes/lasagne/ardsshw5-69199-729136-cfcd2-z7iisn2n
  }
]

const port = 5000;

app.get('/', (req, res) => {
  res.send('api is working');
});

app.get('/recipes', (req, res) => {
  // Recipe.find()
  //   .then(docs => res.send(docs));
  return res.send(recipes);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
