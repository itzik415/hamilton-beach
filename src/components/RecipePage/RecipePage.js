import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeHeader from './RecipeHeader/RecipeHeader';
import { fetchChosenRecipe } from '../../Redux/actions';
import { store } from '../../Redux/store';

class RecipePage extends Component {
    componentDidMount() {
        store.dispatch(fetchChosenRecipe());
    }

    render() {
        if(this.props.chosenRecipe[0] !== undefined) {
        return (
        <div className="recipePage">
            <RecipeHeader 
                name={this.props.chosenRecipe[0].name} 
                time={this.props.chosenRecipe[0].cookingtime} 
                level={this.props.chosenRecipe[0].level} 
                kosher={this.props.chosenRecipe[0].kosher}
                type={this.props.chosenRecipe[0].type}
                />
            <div className="recipePage-details">
                <img className="recipePage-details-img" src={`${this.props.chosenRecipe[0].imageurl}`} alt="recipe name" />
                <p className="recipePage-details-name">{this.props.chosenRecipe[0].name}</p>
                <div className="recipePage-details-div">
                    <div className="recipePage-details-div-rightSide">
                        <h1 className="recipePage-details-div-rightSide-title">רכיבים</h1>
                        <label className="recipePage-details-div-rightSide-container">
                            <input type="checkbox"/>
                            <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                            <span className="recipePage-details-div-rightSide-container-ingredient">400 גרם (2 כוסות) סולת</span>
                        </label>
                        <label className="recipePage-details-div-rightSide-container">
                            <input type="checkbox"/>
                            <span className="recipePage-details-div-rightSide-container-checkmark"></span>
                            <span className="recipePage-details-div-rightSide-container-ingredient">360 מ”ל (½1 כוסות) מים</span>
                        </label>
                        
                        <div className="recipePage-details-div-rightSide-tags">
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].type}</p>
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].kosher}</p>
                            <p className="recipePage-details-div-rightSide-tags-feature">{this.props.chosenRecipe[0].level}</p>
                            <ion-icon id="tag-icon" name="pricetag"></ion-icon>
                        </div>
        
                    </div>
                    <div className="recipePage-details-div-leftSide">
                        <h1 className="recipePage-details-div-leftSide-title">הוראות הכנה</h1>
                        <div className="recipePage-details-div-leftSide-instructions">
                            <input type="checkbox" id="btnControl0"/>
                            <label htmlFor="btnControl0">
                                <p className="instructions-text"><span>.1</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                            </label>
                        </div>
                        <div className="recipePage-details-div-leftSide-instructions">
                            <input type="checkbox" id="btnControl1"/>
                            <label htmlFor="btnControl1">
                                <p className="instructions-text"><span>.2</span>מערבבים ידנית את כל החומרים בתוך קערה ולשים 3 דקות לקבלת בצק רך ודביק. אם הבצק יבש מדי, מוסיפים כף מים בכל פעם עד שמתקבל מרקם אלסטי. מכסים בניילון נצמד ומניחים במקרר ל-30 דקות</p>
                            </label>
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
        chosenRecipe: state.chosenRecipe       
    }
}

export default connect(mapStateToProps, null)(RecipePage);