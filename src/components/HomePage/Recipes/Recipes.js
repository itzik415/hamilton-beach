import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChosenRecipe } from '../../../Redux/actions';

const Recipes = (props) => {
    return (
        <div className="recipes">
            <div className="recipes-line">
                <hr className="recipes-line-hr"/>
                <h1 className="recipes-line-header">מתכונים</h1>
                <hr className="recipes-line-hr"/>
            </div>
            <div className="recipes-container">
                {
                    props.recipes.map((recipe, index) => {
                        return (
                            index <= 2?
                                <Link onClick={props.getRecipe} to={`/recipes/${recipe.category}/${recipe.englishname.replace(/\s/g, '-')}`} key={recipe.id} className="recipes-container-recipe">
                                    <h1 className="recipes-container-recipe-title">סלטים</h1>
                                    <img src={recipe.imageurl} className="recipes-container-recipe-img pdLeft" alt="recipe name"/>
                                    <div className="recipes-container-recipe-description">
                                        <h1 className="recipes-container-recipe-description-title">{recipe.name}</h1>
                                        <div className="recipes-container-recipe-description-recipe">
                                            <p>{recipe.type}</p>
                                            <p>{recipe.kosher}</p>
                                            <p>{recipe.level}</p>
                                            <p>{recipe.cookingtime.slice(3)}</p>
                                            <span>{recipe.cookingtime.slice(0,3)}</span>
                                        </div>
                                    </div>
                                </Link>: null
                        )
                    })
                }
            </div>            
            <Link to="/recipes" className="recipes-button">לכל המתכונים</Link>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        chosenRecipe: state.chosenRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRecipe: (recipe) => dispatch(fetchChosenRecipe(recipe))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recipes);