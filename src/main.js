import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import Nav from './components/HomePage/NavBar/Nav';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import RecipePage from './components/RecipePage/RecipePage';
import ProductPage from './components/ProductPage/ProductPage';
import ContactPage from './components/ContactPage/ContactPage';
import AuthorizedSellersPage from './components/AuthorizedSellersPage/AuthorizedSellersPage';
import ServiceLocationsPage from './components/ServiceLocationsPage/ServiceLocationsPage';
// import FoodTypePage from './components/FoodTypePage/FoodTypePage';
import AllRecipesPage from './components/AllRecipesPage/AllRecipesPage';
import AllProductsPage from './components/AllProductsPage/AllProductsPage';
import SparePartsPage from './components/SparePartsPage/SparePartsPage';
import ProductCategoryPage from './components/ProductCategoryPage/ProductCategoryPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <Router>
                <div className="router-div">
                    <Nav />
                    <ScrollToTop />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/authorized-sellers' component={AuthorizedSellersPage} />
                    <Route path='/service-locations' component={ServiceLocationsPage} />
                    <Route path='/spare-parts' component={SparePartsPage} />
                    <Route exact path='/recipes' component={AllRecipesPage} />
                    {/* <Route exact path='/recipes/:category' component={FoodTypePage} /> */}
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
