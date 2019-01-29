import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Recipes = () => {

    return (
        <div className="recipes">
            <div className="recipes-container">
                <div className="recipes-container-recipe">
                    <img src="https://www.hamiltonbeach.com/media/recipes/guacamole.jpg" className="recipes-container-recipe-img pdLeft" alt="recipe name"/>
                    <h1 className="recipes-container-recipe-title">Guacamole</h1>
                </div>
                <div className="recipes-container-recipe">
                    <img src="https://www.hamiltonbeach.com/media/recipes/guacamole.jpg" className="recipes-container-recipe-img" alt="recipe name"/>
                    <h1 className="recipes-container-recipe-title">Guacamole</h1>
                </div>
                <div className="recipes-container-recipe">
                    <img src="https://www.hamiltonbeach.com/media/recipes/guacamole.jpg" className="recipes-container-recipe-img" alt="recipe name"/>
                    <h1 className="recipes-container-recipe-title">Guacamole</h1>
                </div>
                <div className="recipes-container-recipe">
                    <img src="https://www.hamiltonbeach.com/media/recipes/guacamole.jpg" className="recipes-container-recipe-img pdRight" alt="recipe name"/>
                    <h1 className="recipes-container-recipe-title">Guacamole</h1>
                </div>
            </div>            
            <Link to="/recipes" className="recipes-button">לכל המתכונים</Link>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        // currentImage: state.slider.currentImage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // moveToTheLeft: () => dispatch(goToNextSlide())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);