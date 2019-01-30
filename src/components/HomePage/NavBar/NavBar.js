import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__section">
                <div className="navBar__section-leftSide">
                    <Link to="/"><img className="navBar__section-leftSide-logo" src={require('../../../images/logo.png')} alt="Hamilton Beach logo"/></Link>
                </div>
                <div className="navBar__section-rightSide">
                    <span id="Link" className="navBar__section-rightSide-category">תמיכה
                        <div className="navBar__section-rightSide-category-dropDown">
                            <Link id="Link2" to="/support/authorized-sellers">משווקים מורשים</Link>
                            <Link id="Link2" to="/support/spare-parts">אביזרים</Link>
                            <Link id="Link2" to="/support/contact">צור קשר</Link>
                        </div>
                    </span>
                    <Link id="Link" to="/about" className="navBar__section-rightSide-category">אודותינו</Link>
                    <span id="Link" to="/recipes" className="navBar__section-rightSide-category">מתכונים
                        <div className="navBar__section-rightSide-category-dropDown">
                            <Link id="Link2" to="/recipes/entrees">מנות ראשונות</Link>
                            <Link id="Link2" to="/recipes/main-courses">עקריות</Link>
                            <Link id="Link2" to="/recipes/deserts">קינוחים</Link>
                        </div>
                    </span>
                    <span id="Link" className="navBar__section-rightSide-category">מוצרים
                        <div className="navBar__section-rightSide-category-dropDown">
                            <Link id="Link2" to="/products/blenders">בלנדרים</Link>
                            <Link id="Link2" to="/products/waffle-makers">וופל מייקר</Link>
                            <Link id="Link2" to="/products/toasters">טוסטרים</Link>
                            <Link id="Link2" to="/products/multicookers">מולטי קוקר</Link>
                            <Link id="Link2" to="/products/grinders">מטחנות קפה ותבלינים</Link>
                            <Link id="Link2" to="/products/juicers">מסחטות מיצים</Link>
                            <Link id="Link2" to="/products/food-processors">מעבדי מזון</Link>
                        </div>
                    </span>
                </div>
                <div className="navBar__section-rightSide-icons">
                    <Link id="Link3" to="/cart"><ion-icon id="cart-logo" name="cart"></ion-icon></Link>
                    <Link id="Link3" to="/search-result"><ion-icon id="search-button" name="search"></ion-icon></Link>
                </div>
            </div>
        </div>
    )
}

export default navBar;