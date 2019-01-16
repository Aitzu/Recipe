import React, { Component } from 'react';
// import './App.css';
// import Navbar from './Navbar';
import Recipe from './Recipe';

const recipes = [
  {
    id: "1", 
    recipename: "baby coconut chicken meal",
    category: "baby food",
    ingredients: [
      {
        id: "1",
        name:"chicken breast"
      }, 
      {
        id: "2",
        name:"pumpkin"
      }, 
      {
        id: "3",
        name:"coconut milk"
      }
    ]
    //https://www.recipecommunity.com.au/baby-food-recipes/baby-coconut-chicken-meal/4wyfnaab-f9c28-481590-cfcd2-xs7vp6mu
  }, 
  {
    id: "2",
    recipename: "lasagne",
    category: "pasta",
    ingredients: [
      {
        id:"4",
        name:"pasta"
      }, 
      {
        id: "5",
        name: "cheese"
      }
      ]
    //https://www.recipecommunity.com.au/pasta-rice-dishes-recipes/lasagne/ardsshw5-69199-729136-cfcd2-z7iisn2n
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <div class="body">
          {recipes.map(recipe => {
            return (
              <Recipe
            id={recipe.id}
            name={recipe.recipename}
            category={recipe.category}
            ingredients={recipe.ingredients}
          />)
          })}
        </div>

      </div>
    );
  }
}

export default App;
