import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import NavBar from './components/HomePage/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

const Main = () => {
    return (
        <Router>
            <div className="router-div">
                <NavBar />
                <Route exact path='/' component={HomePage} />
                {/* <Route path='/article/:name' component={articlePage} /> */}
                <Footer />
            </div>
        </Router>
    )
}

export default Main;
