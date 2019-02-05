import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const hiddenNav = (props) => {
    const style = {
        transition: '1s',
        transform: `translateY(${props.translateY})`,
    }
    return (
        <div className="hiddenNav" style={style}>
            <span id="Link4" className="hiddenNav-category">תמיכה
                <div className="hiddenNav-category-dropDown">
                    <Link id="Link5" to="/support/authorized-sellers">משווקים מורשים</Link>
                    <Link id="Link5" to="/support/spare-parts">אביזרים</Link>
                    <Link id="Link5" to="/support/contact">צור קשר</Link>
                </div>
            </span>
            <Link id="Link4" to="/about" className="hiddenNav-category">אודותינו</Link>
            <span id="Link4" to="/recipes" className="hiddenNav-category">מתכונים
                <div className="hiddenNav-category-dropDown">
                    <Link id="Link5" to="/recipes/entrees">מנות ראשונות</Link>
                    <Link id="Link5" to="/recipes/main-courses">עקריות</Link>
                    <Link id="Link5" to="/recipes/deserts">קינוחים</Link>
                </div>
            </span>
            <span id="Link4" className="hiddenNav-category">מוצרים
                <div className="hiddenNav-category-dropDown">
                    <Link id="Link5" to="/products/blenders">בלנדרים</Link>
                    <Link id="Link5" to="/products/waffle-makers">וופל מייקר</Link>
                    <Link id="Link5" to="/products/toasters">טוסטרים</Link>
                    <Link id="Link5" to="/products/multicookers">מולטי קוקר</Link>
                    <Link id="Link5" to="/products/grinders">מטחנות קפה ותבלינים</Link>
                    <Link id="Link5" to="/products/juicers">מסחטות מיצים</Link>
                    <Link id="Link5" to="/products/food-processors">מעבדי מזון</Link>
                </div>
            </span>
            <Link id="Link4" to="/cart" className="hiddenNav-category">עגלת הקניות</Link>
            <Link id="Link4" to="/search-result" className="hiddenNav-categorySearch">
                <input type="text" name="search" placeholder="...חפש" autoComplete="nope"/>
                <ion-icon id="search-button-hidden" name="search"></ion-icon>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        translateY: state.translateYHidden
    }
}


export default connect(mapStateToProps, null)(hiddenNav);