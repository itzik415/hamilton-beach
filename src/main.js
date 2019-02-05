import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import Nav from './components/HomePage/NavBar/Nav';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import RecipePage from './components/RecipePage/RecipePage';
import ProductPage from './components/ProductPage/ProductPage';
import ContactPage from './components/ContactPage/ContactPage';

const Main = () => {
    return (
        <Router>
            <div className="router-div">
                <Nav />
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/support/contact' component={ContactPage} />
                <Route path='/recipes/:name' component={RecipePage} />
                <Route path='/products/:category/:name' component={ProductPage} />
                {/* <Route path='/article/:name' component={articlePage} /> */}
                <Footer />
            </div>
        </Router>
    )
}

export default Main;
