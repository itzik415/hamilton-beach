import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import NavBar from './components/HomePage/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import recipePage from './components/RecipePage/RecipePage';
import productPage from './components/ProductPage/ProductPage';

const Main = () => {
    return (
        <Router>
            <div className="router-div">
                <NavBar />
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/recipes/:name' component={recipePage} />
                <Route path='/products/:category/:name' component={productPage} />
                {/* <Route path='/article/:name' component={articlePage} /> */}
                <Footer />
            </div>
        </Router>
    )
}

export default Main;
