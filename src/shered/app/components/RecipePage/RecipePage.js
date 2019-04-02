import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import { fetchChosenRecipe, ingredientsHandle, instructionsHandle } from '../../Redux/actions';
import { store } from '../../Redux/store';

class RecipePage extends Component {
    componentDidMount() {
        store.dispatch(fetchChosenRecipe());
        ingredientsHandle();
        instructionsHandle();
    }

    render() {
        if(this.props.chosenRecipe[0] !== undefined) {
        return (
        <div className="recipePage">
            <RecipeHeader 
                name={this.props.chosenRecipe[0].name} 
                time={this.props.chosenRecipe[0].cooking_time} 
                level={this.props.chosenRecipe[0].level} 
                kosher={this.props.chosenRecipe[0].kosher}
                type={this.props.chosenRecipe[0].type}
                />
            <div className="recipePage-details">
                <img className="recipePage-details-img" src={`${this.props.chosenRecipe[0].image_url}`} alt="recipe name" />
                <p className="recipePage-details-name">{this.props.chosenRecipe[0].name}</p>
                <div className="recipePage-details-div">
                    <div className="recipePage-details-div-leftSide">
                        <h1 className="recipePage-details-div-leftSide-title">הוראות הכנה</h1>
                        {
                            this.props.chosenRecipeInstructions.map((instra,index) => {
                                return (
                                    <div className="recipePage-details-div-leftSide-instructions" key={index}>
                                        <input type="checkbox" id={`btnControl${index}`}/>
                                        <label htmlFor={`btnControl${index}`}>
                                            <p className="instructions-text">{instra.instructions}<span>{`${instra.instruction_number}.`}</span></p>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="recipePage-details-div-rightSide">
                        <h1 className="recipePage-details-div-rightSide-title">רכיבים</h1>
                        {
                            this.props.chosenRecipeIngredients.map((item,index) => {
                                return (
                                    <label className="recipePage-details-div-rightSide-container" key={index}>
                                        <input type="checkbox"/>
                                        <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                                        <span className="recipePage-details-div-rightSide-container-ingredient"><p>{item.quantity}</p>{item.ingredient}</span>
                                    </label>
                                )
                            })
                        }
                        <div className="recipePage-details-div-rightSide-tags">
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].type}</p>
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].kosher}</p>
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].level}</p>
                            <ion-icon id="tag-icon" name="pricetag"></ion-icon>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
        
        )
        }
        else {
            return null;
        }
    }
}


const mapStateToProps = state => {
    return {
        chosenRecipe: state.chosenRecipe,
        chosenRecipeIngredients: state.chosenRecipeIngredients,
        chosenRecipeInstructions: state.chosenRecipeInstructions
    }
}

export default connect(mapStateToProps, null)(RecipePage);