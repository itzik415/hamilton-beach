import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import Nav from './components/HomePage/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import RecipePage from './components/RecipePage/RecipePage';
import ProductPage from './components/ProductPage/ProductPage';
import ContactPage from './components/ContactPage/ContactPage';
import AuthorizedSellersPage from './components/AuthorizedSellersPage/AuthorizedSellersPage';
import ServiceLocationsPage from './components/ServiceLocationsPage/ServiceLocationsPage';
import PartPage from './components/PartPage/PartPage';
import AllRecipesPage from './components/AllRecipesPage/AllRecipesPage';
import AllProductsPage from './components/AllProductsPage/AllProductsPage';
import SparePartsPage from './components/SparePartsPage/SparePartsPage';
import ProductCategoryPage from './components/ProductCategoryPage/ProductCategoryPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import AddToCartForm from './components/User/AddToCart/AddToCart';
import SuccessPayment from './components/SuccessPayment/SuccessPayment'

const Main = () => {
    return (
        <Router>
                <div className="router-div">
                    <Nav />
                    <ScrollToTop />
                    <AddToCartForm />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/authorized-sellers' component={AuthorizedSellersPage} />
                    <Route path='/service-locations' component={ServiceLocationsPage} />
                    <Route path='/shopping-cart' component={ShoppingCart} />
                    <Route path='/success-payment' component={SuccessPayment} />
                    <Route exact path='/spare-parts' component={SparePartsPage} />
                    <Route exact path='/spare-parts/:productmodel/:partmodel' component={PartPage} />
                    <Route exact path='/recipes' component={AllRecipesPage} />
                    <Route exact path='/recipes/:category/:name' component={RecipePage} />
                    <Route exact path='/products' component={AllProductsPage} />
                    <Route exact path='/products/:category' component={ProductCategoryPage}/>
                    <Route exact path='/products/:category/:model' component={ProductPage} />
                    <Footer />
                </div>
        </Router>
    )
}

export default Main;
