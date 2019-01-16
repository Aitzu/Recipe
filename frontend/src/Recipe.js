import React from 'react';

const Recipe = (props) => {
    return (
        <div class="recipe-text">
            <h3><strong>{props.name}</strong></h3>
            <h5>Cateogry: {props.category}</h5>
            <p>Ingredients:{props.ingredients.map(ingredient => {
                return ingredient.name 
            })}</p>
        </div>
    );
}

export default Recipe;