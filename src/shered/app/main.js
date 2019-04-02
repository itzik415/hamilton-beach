import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import NoMatch from './noMatch'
import Nav from './components/HomePage/Nav/Nav'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import AddToCartForm from './components/User/AddToCart/AddToCart'

class Main extends Component {
    render() {
        return (
            <div className="router-div">
                <Nav />
                <ScrollToTop />
                <AddToCartForm />
                <Switch>
                    {routes.map(( {path, exact, component: C, ...rest}) => (
                        <Route 
                            key={path}
                            path={path}
                            exact={exact}
                            render={(props) => (
                                <C {...props} {...rest} />
                            )}
                        />
                    ))}
                    <Route render={(props) => <NoMatch {...props} />} />
                </Switch>
                <Footer />
            </div>
        )

    }
}

export default Main;
