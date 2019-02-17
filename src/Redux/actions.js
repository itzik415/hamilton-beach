import { store } from "./store";
import { initialState } from './reducer';
var _ = require('lodash');

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

//Importing the Authorized Sellers
export function getAuthorizedStores() {
    return function(dispatch) {
        fetch('http://localhost:5000/api/authorized-sellers')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the proucts
export function getProducts() {
    return function(dispatch) {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_PRODUCTS', payload: myJson}))
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
    var hamburger = document.querySelector(".hamburger");
    if(store.getState().translateYHidden === '-400px') {
        hamburger.classList.toggle("is-active");
        return{type: 'OPEN_NAV'}
    }
    hamburger.classList.toggle("is-active");
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

//Choosing the right product category
export function getProductCategory() {
    return function(dispatch) {
        let chosenProductCategoryArray = store.getState().products.filter(product => {
            return product.category === window.location.href.slice(window.location.href.lastIndexOf('/')+1)
        })
        dispatch({type: 'RECIVE_RIGHT_PRODUCT_CATEGORY', payload: initialState.chosenProductCategory = chosenProductCategoryArray[0]})
    }
}


//Fetching the right product when refreshing the page
export function productHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.indexOf('products/')+9);
    let modelUrl = window.location.href.slice(-8);
    // .replace(/[\/\\(),.-]/, ' ').replace(/\s+/, '-').replace(/(^-|-$)/, '')
    fetch(`http://localhost:5000/api/products/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: myJson[0]}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    fetch(`http://localhost:5000/api/products-images/${modelUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_IMAGES', payload: myJson.map(item => item)}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching product background image
export function fetchProductImageBackground() {
    let category = window.location.href.slice(window.location.href.indexOf('products/')+9);
    fetch(`http://localhost:5000/api/product-category-background-images/${category}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_BACKGROUND_IMAGE', payload: myJson[0].imageurl}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching product category
export function fetchProductCategory() {
    fetch(`http://localhost:5000/api/products`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_CATEGORY', payload: _.uniqBy(myJson, 'category').map(item => [item.category,item.type])}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching recipes
export function fetchRecipes() {
    return function(dispatch) {
        fetch(`http://localhost:5000/api/recipes`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RECIPES', payload: myJson}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching recipes category
export function fetchRecipesCategory(category) {
    return function(dispatch) {
        const type = category.target.id.slice(category.target.id.indexOf('-')+1);
        fetch(`http://localhost:5000/api/recipes`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RECIPES', payload: myJson.filter(item => item.category === type)}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching the right recipe
export function fetchChosenRecipe() {
    return function(dispatch) {
        let urlLocation = window.location.href;
        let pageRecipeName = urlLocation.slice(urlLocation.indexOf('recipes/')+8).replace(/-/g, ' ');
        fetch(`http://localhost:5000/api/recipes/${pageRecipeName}`)
            .then(response => response.json())
            // .then(myJson => console.log(myJson))
            .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_RECIPE', payload: myJson.filter(item => item.englishname === pageRecipeName.slice(pageRecipeName.lastIndexOf('/')+1).replace(/-/g, " "))}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    }
}


//Choosing the right product
export function getRecipeByClick(selectedRecipetId) {
    return function(dispatch) {
        let chosenRecipeArray = store.getState().recipes.filter(item => {
            return selectedRecipetId.target.alt === item.name;
        })
        console.log(selectedRecipetId.target.alt)
        store.dispatch({type: 'RECIVE_RIGHT_RECIPE', payload: initialState.chosenRecipe = chosenRecipeArray[0]})
    }
}