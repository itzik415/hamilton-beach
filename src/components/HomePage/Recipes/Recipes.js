import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Recipes = () => {

    return (
        <div className="recipes">
            <div className="recipes-line">
                <hr className="recipes-line-hr"/>
                <h1 className="recipes-line-header">מתכונים</h1>
                <hr className="recipes-line-hr"/>
            </div>
            <div className="recipes-container">
                <div className="recipes-container-recipe">
                    <h1 className="recipes-container-recipe-title">סלטים</h1>
                    <img src="https://static.hashulchan.co.il/www/uploads/2018/12/DSC08464-750x500.jpg" className="recipes-container-recipe-img pdLeft" alt="recipe name"/>
                    <div className="recipes-container-recipe-description">
                        <h1 className="recipes-container-recipe-description-title">גוואקמולי</h1>
                        <div className="recipes-container-recipe-description-recipe">
                            <p>צמחוני</p>
                            <p>כשר</p>
                            <p>קל</p>
                            <p>שעות</p>
                            <span>3.5</span>
                        </div>
                    </div>
                </div>
                <div className="recipes-container-recipe">
                    <h1 className="recipes-container-recipe-title">סלטים</h1>
                    <img src="https://static.hashulchan.co.il/www/uploads/2018/12/IMGL1917-e1546329990476-750x500-1546330038.jpg" className="recipes-container-recipe-img pdLeft" alt="recipe name"/>
                    <div className="recipes-container-recipe-description">
                        <h1 className="recipes-container-recipe-description-title">גוואקמולי</h1>
                        <div className="recipes-container-recipe-description-recipe">
                            <p>צמחוני</p>
                            <p>כשר</p>
                            <p>קל</p>
                            <p>שעות</p>
                            <span>3.5</span>
                        </div>
                    </div>
                </div>
                <div className="recipes-container-recipe">
                    <h1 className="recipes-container-recipe-title">סלטים</h1>
                    <img src="https://static.hashulchan.co.il/www/uploads/2018/11/At_015-750x500-1545300669.jpg" className="recipes-container-recipe-img pdLeft" alt="recipe name"/>
                    <div className="recipes-container-recipe-description">
                        <h1 className="recipes-container-recipe-description-title">גוואקמולי</h1>
                        <div className="recipes-container-recipe-description-recipe">
                            <p>צמחוני</p>
                            <p>כשר</p>
                            <p>קל</p>
                            <p>שעות</p>
                            <span>3.5</span>
                        </div>
                    </div>
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