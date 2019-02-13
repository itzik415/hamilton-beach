import { store } from "./store";
import { initialState } from './reducer';

// Slider actions

//Importing all the slider images from a json file
export function getSliderImages() {
    return function(dispatch){
        fetch('http://localhost:5000/api/backgroundimages')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SLIDER_IMAGES', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the service locations 
export function getServiceLocations() {
    return function(dispatch) {
        fetch('http://localhost:5000/api/servicelocations')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SERVICE_LOCATIONS', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the proucts
export function getProducts() {
    return function(dispatch) {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_PRODUCTS', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

export function accordionToggle1 () {
    if(store.getState().accordionToggleDis1 === 'none'){
        return {type: 'OPEN_ACCORDION_1'}
    } 
    return {type: 'CLOSE_ACCORDION_1'}
}

export function accordionToggle2 () {
    if(store.getState().accordionToggleDis2  === 'none'){
        return {type: 'OPEN_ACCORDION_2'}
    } 
    return {type: 'CLOSE_ACCORDION_2'}
}

export function toggleHiddenNav () {
    if(store.getState().translateYHidden === '-400px') {
        return{type: 'OPEN_NAV'}
    }
    return{type: 'CLOSE_NAV'};
}

export function toggleDropDown(e) {
    return function(dispatch) {
        if(e.target.nextElementSibling.classList[1] !== 'displayChange') {
            e.target.classList.add('linkStyleChange')
            return e.target.nextElementSibling.classList.add("displayChange");
        }
        e.target.classList.remove('linkStyleChange')
        return e.target.nextElementSibling.classList.remove("displayChange");
    }
}

export function closeAll() {
    return function() {
        const navItem = document.querySelectorAll('.dropD');
        const dropDown = document.querySelectorAll('.hiddenNav-dropDown');
        for(let i = 0; i < dropDown.length; i++){
            navItem[i].classList.remove('linkStyleChange')
            dropDown[i].classList.remove("displayChange");
        }
    }
}

//Choosing the right product
export function getProductByClick(selectedProductId) {
    return function(dispatch) {
        let chosenProductArray = store.getState().products.filter(item => {
            return selectedProductId.target.alt === item.shortdescription;
        })
        store.dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: initialState.chosenProduct = chosenProductArray[0]})
    }
}


//Fetching the right product when refreshing the page
export function productHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.indexOf('products/')+9);
    // .replace(/[\/\\(),.-]/, ' ').replace(/\s+/, '-').replace(/(^-|-$)/, '')
    if(window.location.href.indexOf('products/') > -1) {
        fetch(`http://localhost:5000/api/products/${pageUrl}`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: myJson[0]}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}))
    }else {
        console.log('didnt find the right product')
    }
}