import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import RecipePage from './components/RecipePage/RecipePage'
import ProductPage from './components/ProductPage/ProductPage'
import ContactPage from './components/ContactPage/ContactPage'
import AuthorizedSellersPage from './components/AuthorizedSellersPage/AuthorizedSellersPage'
import ServiceLocationsPage from './components/ServiceLocationsPage/ServiceLocationsPage'
import PartPage from './components/PartPage/PartPage'
import AllRecipesPage from './components/AllRecipesPage/AllRecipesPage'
import AllProductsPage from './components/AllProductsPage/AllProductsPage'
import SparePartsPage from './components/SparePartsPage/SparePartsPage'
import ProductCategoryPage from './components/ProductCategoryPage/ProductCategoryPage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import SuccessPayment from './components/SuccessPayment/SuccessPayment'
import ProcessPayment from './components/ProcessPayment/ProcessPayment'
import CancelPayment from './components/CancelPayment/CancelPayment'

const routes = [
    { path: '/', exact: true, component: HomePage },
    { path: '/about', component: About },
    { path: '/contact', component: ContactPage },
    { path: '/authorized-sellers', component: AuthorizedSellersPage },
    { path: '/service-locations', component: ServiceLocationsPage },
    { path: '/shopping-cart', component: ShoppingCart },
    { path: '/success-payment', component: SuccessPayment },
    { path: '/process-payment', component: ProcessPayment },
    { path: '/cancel-payment', component: CancelPayment },
    { path: '/spare-parts', exact: true, component: SparePartsPage },
    { path: '/spare-parts/:productmodel/:partmodel', exact: true, component: PartPage },
    { path: '/recipes', exact: true, component: AllRecipesPage },
    { path: '/recipes/:category/:name', exact: true, component: RecipePage },
    { path: '/products', exact: true, component: AllProductsPage },
    { path: '/products/:category', exact: true, component: ProductCategoryPage },
    { path: '/products/:category/:model', exact: true, component: ProductPage }

    
    //an example with route with fetching
    // {
    //     path: '/products',
    //     component: Products,
    //     fetchInitialDate: (path = '') => fetchPopularRepos(path.split('/').pop())
    // }
]

export default routes;