import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toggleHiddenNav, closeAll, fetchProductCategory, logout, openSignForm} from '../../../../Redux/actions';
import { connect } from 'react-redux';


class NavBar extends Component {

    componentDidMount() {
        fetchProductCategory();
    }

    
    render() {
        const userLink = (
            <span onClick={this.props.logout} id="Link" className="navBar__section-rightSide-category"><Link to="/">התנתק</Link></span>
        )

        const gustLink = (
            <span onClick={this.props.signIn} id="Link" className="navBar__section-rightSide-category">התחברות/ הרשמה</span>
        )
        return (
            <div className="navBar">
                <div className="navBar__section ">
                    <button onClick={this.props.toggleNav} className="hamburger hamburger--squeeze" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <div className="navBar__section-rightSide">
                        <div className="navBar__section-rightSide-icons">
                            <ion-icon id="search-button" name="search"></ion-icon>
                            <Link className="navBar__section-rightSide-icons-cart" id="Link3" to="/shopping-cart">
                                <p className="navBar__section-rightSide-icons-cart-totalInCart">{this.props.shoppingCart.totalItemsInCart}</p>
                                <ion-icon id="cart-logo" name="cart"></ion-icon>
                            </Link>
                        </div>
                        {
                            this.props.auth?userLink:gustLink
                        }
                        <span id="Link" className="navBar__section-rightSide-category">מוצרים
                            <div className="navBar__section-rightSide-category-dropDown">
                                {
                                    this.props.productsCategories.map((item,index) => {
                                        return (
                                            <Link key={index} id="Link2" to={`/products/${item[0]}`}>{item[3]}</Link>
                                            )
                                        })   
                                    } 
                            </div>
                        </span>
                        <Link id="Link" to="/recipes" className="navBar__section-rightSide-category">מתכונים</Link>
                        <Link id="Link" to="/about" className="navBar__section-rightSide-category">אודותינו</Link>
                        <span id="Link" className="navBar__section-rightSide-category">תמיכה
                            <div className="navBar__section-rightSide-category-dropDown">
                                <Link id="Link2" to="/authorized-sellers">משווקים מורשים</Link>
                                <Link id="Link2" to="/service-locations">נקודות שירות</Link>
                                <Link id="Link2" to="/spare-parts">חלקי חילוף ואביזרים</Link>
                                <Link id="Link2" to="/contact">צור קשר</Link>
                            </div>
                        </span>
                    </div>
                    <div className="navBar__section-leftSide">
                        <Link to="/"><img className="navBar__section-leftSide-logo" src={require('../../../../images/logo.png')} alt="Hamilton Beach logo"/></Link>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        productsCategories: state.productsCategories,
        shoppingCart: state.shoppingCart,
        text: state.registeration.navText,
        auth: state.user.isAuthnticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNav: () => {
            dispatch(toggleHiddenNav());
            dispatch(closeAll());
        },
        logout: (e) => dispatch(logout(e)),
        signIn: () => dispatch(openSignForm())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
