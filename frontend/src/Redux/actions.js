import { store } from "./store";
import { initialState } from './reducer';
import isEmpty from 'lodash/isEmpty';
const jwt =  require('jsonwebtoken');
const _ = require('lodash');
const axios = require('axios');

// Slider actions
    

//Importing all the slider images from a json file
export function getSliderImages() {
    return function(dispatch){
        fetch('https://hamiltonbeach.herokuapp.com/api/backgroundimages')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SLIDER_IMAGES', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the service locations 
export function getServiceLocations() {
    return function(dispatch) {
        fetch('https://hamiltonbeach.herokuapp.com/api/servicelocations')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SERVICE_LOCATIONS', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the Authorized Sellers
export function getAuthorizedStores() {
    return function(dispatch) {
        fetch('https://hamiltonbeach.herokuapp.com/api/authorized-sellers')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_AUTHORIZED_SELLERS', payload: myJson.map(value => value)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Importing the products
export function getProducts() {
    return function(dispatch) {
        fetch('https://hamiltonbeach.herokuapp.com/api/products')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_PRODUCTS', payload: myJson}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching recipes
export function fetchRecipes() {
    return function(dispatch) {
        fetch(`https://hamiltonbeach.herokuapp.com/api/recipes`)
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_RECIPES', payload: myJson}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching spare_parts
export function fetchSparePartsByProductModel() {
    const sparePart = window.location.href.slice(window.location.href.lastIndexOf('/')+1, window.location.href.lastIndexOf('/')+6);
    return function(dispatch) {
        fetch(`https://hamiltonbeach.herokuapp.com/api/spare_parts/${sparePart}`)
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SPARE_PARTS_BY_MODEL', payload: myJson.filter(item => item.product_model === sparePart)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching spare_parts
export function getCart() {
    return function(dispatch) {
        if(!isEmpty(store.getState().shoppingCart.products)) {
            const email = store.getState().user.email;
            fetch(`https://hamiltonbeach.herokuapp.com/api/cart/${email}`)
                .then(response => response.json())
                .then(myJson => dispatch({type: 'RECIVE_CART', 
                    payload: myJson, 
                    payload2: myJson.map(item => item.price * item.amount).reduce((a,b) => a+b, 0),
                    payload3: myJson.map(item => item.amount).reduce((a,b) => a+b, 0)}))
                .catch(err => dispatch({type: 'ERROR', payload: err}));
        }else {
            dispatch({type: 'RECIVE_CART', 
                payload: [], 
                payload2: 0,
                payload3: 0})
        }
    }
}

//Finding spare part 
export function findSparePartEvent(e) {
    return function(dispatch) {
        const model2 = e.target.name;
        const model = document.querySelector('.spareParts-main-find-search-input').value;
        if(!e.target.value && model === '') return 'nothing found';
        if(e.key === 'Enter' || model2 === 'search') {
            if(model === '' || model2 === '') return dispatch({type: 'SPARE_PARTS_NOT_FOUND'});
            fetch(`https://hamiltonbeach.herokuapp.com/api/spare_parts/${model}`)
                .then(response => response.json())
                .then(myJson => 
                    myJson.length === 0? 
                    dispatch({type: 'SPARE_PARTS_NOT_FOUND', payload: []}):
                    dispatch({type: 'SPARE_PARTS_FOUND', payload: myJson}) &&
                    fetch(`https://hamiltonbeach.herokuapp.com/api/products/${myJson[0].category}/${myJson[0].product_model}-IS`)
                        .then(response => response.json())
                        .then(myJson => dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: myJson}))
                        .catch(err => dispatch({type: 'ERROR', payload: err}))
                )
                .catch(err => dispatch({type: 'ERROR', payload: err}));
        }
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

//Choosing the right product by click
export function getProductByClick(selectedProductId) {
    return function(dispatch) {
        let chosenProductArray = store.getState().products.filter(item => {
            return selectedProductId.target.alt === item.short_description;
        })
        dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: initialState.chosenProduct = chosenProductArray})
    }
}

//Choosing the right spare part by click
export function getPartByClick(selectedPart) {
    return function(dispatch) {
        let chosenPartArray = store.getState().sparePartsByProductModel.filter(item => {
            return selectedPart.target.alt === item.hebrew_name;
        })
        dispatch({type: 'RECIVE_RIGHT_SPARE_PART', payload: initialState.chosenPart = chosenPartArray})
    }
}

//Fetching the right part when refreshing the page
export function partHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.indexOf('spare-parts/')+12);
    fetch(`https://hamiltonbeach.herokuapp.com/api/spare_parts/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_SPARE_PART', payload: myJson}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching the right ingredients when refreshing the page
export function ingredientsHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.lastIndexOf('/')+1).replace(/-/g, ' ');
    fetch(`https://hamiltonbeach.herokuapp.com/api/recipe_ingredients/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_INGREDIENTS', payload: myJson}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching the right instructions when refreshing the page
export function instructionsHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.lastIndexOf('/')+1).replace(/-/g, ' ').toLowerCase();
    fetch(`https://hamiltonbeach.herokuapp.com/api/recipe_instructions/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_INSTRUCTIONS', payload: myJson}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching the right features when refreshing the page
export function featuresHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.lastIndexOf('/')+1);
    fetch(`https://hamiltonbeach.herokuapp.com/api/product_features/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_FEATURES', payload: myJson}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Choosing the right product category
export function getProductCategory() {
    let category = window.location.href.slice(window.location.href.lastIndexOf('/')+1);
    fetch(`https://hamiltonbeach.herokuapp.com/api/products/${category}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_PRODUCT_CATEGORY', payload: myJson[0].hebrew_category}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching product background image
export function fetchProductImageBackground() {
    let category = window.location.href.slice(window.location.href.indexOf('products/')+9);
    fetch(`https://hamiltonbeach.herokuapp.com/api/product-category-background-images/${category}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_BACKGROUND_IMAGE', payload: myJson[0].imageurl}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching the right category from product-category-details
export function fetchRightProductCategoryDetails() {
    return function(dispatch) {
        let urlLocation = window.location.href;
        let pageRecipeName = urlLocation.slice(urlLocation.indexOf('products/')+9);
        fetch(`https://hamiltonbeach.herokuapp.com/api/product-category-details`)
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_RIGHT_PRODUCT_CATEGORY_DETAILS', payload: myJson.filter(item => item.category === pageRecipeName)}))
            .catch(err => dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching the right product when refreshing the page
export function productHandle() {
    let urlLocation = window.location.href;
    let pageUrl = urlLocation.slice(urlLocation.indexOf('products/')+9);
    let modelUrl = window.location.href.slice(-8);
    // .replace(/[\/\\(),.-]/, ' ').replace(/\s+/, '-').replace(/(^-|-$)/, '')
    fetch(`https://hamiltonbeach.herokuapp.com/api/products/${pageUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_PRODUCT', payload: myJson}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    fetch(`https://hamiltonbeach.herokuapp.com/api/products-images/${modelUrl}`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_IMAGES', payload: myJson.map(item => item)}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching product category
export function fetchProductCategory() {
    fetch(`https://hamiltonbeach.herokuapp.com/api/products`)
        .then(response => response.json())
        .then(myJson => store.dispatch({type: 'RECIVE_PRODUCT_CATEGORY', payload: _.uniqBy(myJson, 'category').map(item => [item.category,item.type, item.image_url, item.hebrew_category])}))
        .catch(err => store.dispatch({type: 'ERROR', payload: err}));
}

//Fetching recipes category
export function fetchRecipesCategory(category) {
    return function(dispatch) {
        const type = category.target.id.slice(category.target.id.indexOf('-')+1);
        fetch(`https://hamiltonbeach.herokuapp.com/api/recipes`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RECIPES', payload: myJson.filter(item => item.category === type)}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    }
}

//Fetching the right recipe
export function fetchChosenRecipe() {
    return function(dispatch) {
        let urlLocation = window.location.href;
        let pageRecipeName = urlLocation.slice(urlLocation.indexOf('recipes/')+8).replace(/-/g, ' ').toLowerCase();
        fetch(`https://hamiltonbeach.herokuapp.com/api/recipes/${pageRecipeName}`)
            .then(response => response.json())
            .then(myJson => store.dispatch({type: 'RECIVE_RIGHT_RECIPE', payload: myJson.filter(item => item.lower_case_name === pageRecipeName.slice(pageRecipeName.lastIndexOf('/')+1).replace(/-/g, " "))}))
            .catch(err => store.dispatch({type: 'ERROR', payload: err}));
    }
}


//Choosing the right product
export function getRecipeByClick(selectedRecipetId) {
    return function(dispatch) {
        let chosenRecipeArray = store.getState().recipes.filter(item => {
            return selectedRecipetId.target.alt === item.lower_case_name;
        })
        store.dispatch({type: 'RECIVE_RIGHT_RECIPE', payload: initialState.chosenRecipe = chosenRecipeArray})
    }
}

//Submit the contact form
export async function handleSubmit(e){
    e.preventDefault();
    await axios.post('https://hamiltonbeach.herokuapp.com/api/form', {
        name: e.target.name.value,
        email: e.target.email.value,
        phonenumber: e.target.phonenumber.value,
        message: e.target.message.value
    })
    .then(response => {
        if(response.status === 200) {
            document.querySelector('.contact-message').style.display = "block";
            document.querySelector('.contact-submitButton').style.backgroundColor = "#3fc567";
            document.querySelector('.contact-topFields-email-input').value = "";
            document.querySelector('.contact-topFields-name-input').value = "";
            document.querySelector('.contact-bottomFields-phone-input').value = "";
            document.querySelector('.contact-text-textarea').value = "";
            setTimeout(function(){ 
                document.querySelector('.contact-message').style.display = "none"; 
                document.querySelector('.contact-submitButton').style.backgroundColor = "#c82027";
            }, 4000);
        }
        if(response.status !== 200) {
            document.querySelector('.contact-message2').style.display = "block"
            document.querySelector('.contact-topFields-email-input').value = "";
            document.querySelector('.contact-topFields-name-input').value = "";
            document.querySelector('.contact-bottomFields-phone-input').value = "";
            document.querySelector('.contact-text-textarea').value = "";
            setTimeout(function(){
                window.location.reload() 
            }, 4000);
        }
    })
    .catch(err => console.log(err))
}


//Cart form
export function handleSubmitCart(e){
    const user = jwt.decode(localStorage.jwt).user.email;
    e.preventDefault();
    fetch('https://hamiltonbeach.herokuapp.com/api/pay', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                phonenumber: e.target.phonenumber.value,
                street: e.target.street.value,
                user: user,
                city: e.target.city.value,
                zip: e.target.zip.value,

                url: window.location.href.slice(0, window.location.href.lastIndexOf('/'))
            })
        })
        .then(response => response.json())
        .then(response => window.location = response.paypalUrl)
        .catch(err => console.log(err))
}

//Process payment
export function processPayment(){
    fetch(`https://hamiltonbeach.herokuapp.com/success?orderId=${window.location.href.slice(window.location.href.lastIndexOf('orderId')+8)}`)
        .then(response => response.json())
        .then(response => window.location = response.successUrl)
        .catch(err => console.log(err))
}

//Register form
export function handleSubmitRegister(e){
    e.preventDefault();
    if(e.target.confirmPassword.value !== e.target.password.value){
        return store.dispatch({type: 'PASSWORD_ERROR'})
    }  
    fetch('https://hamiltonbeach.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
                name: e.target.name.value,
                confirmPassword: e.target.confirmPassword.value
            })
        })
        .then(response => response.json())
        console.log('response',  response)
        .then(user => {
            console.log('user',  user)
            if(user.user.id) {
                console.log('user.user',  user.user)
                console.log('user.user.id',  user.user.id)
                localStorage.setItem('jwt', user.token);
                setAuthorizationToken(user.token);
                store.dispatch(setCurrentUser(jwt.decode(user.token)))
                store.dispatch({type: 'USER_REGISTRATION'});
                store.dispatch({type: 'CLOSE_SIGN_FORM'})
            }
        })
        .catch(err => {store.dispatch({type: 'REGISTER_ERROR'})})
}

//Sign in form
export function handleSubmitSignin(e){
    e.preventDefault();
    fetch('https://hamiltonbeach.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log(user)
            if(user.user.id) {
                localStorage.setItem('jwt', user.token);
                setAuthorizationToken(user.token);
                store.dispatch(setCurrentUser(jwt.decode(user.token)))
                store.dispatch(setCart(jwt.decode(user.token)))
                store.dispatch({type: 'USER_REGISTRATION'});
                store.dispatch({type: 'CLOSE_SIGN_FORM'})
            }
            else {
                store.dispatch({type: 'SIGNIN_ERROR'})
            }
        })
        .catch(err => {store.dispatch({type: 'SIGNIN_ERROR'})})
}

export function setCart(user) {
    console.log(user)
    if(user !== null){
        if(user.cart) {
            return {
                type: 'SET_CURRENT_USER_CART',
                payload: user.cart,
                payload2: user.cart.map(item => item.price * item.amount).reduce((a,b) => a+b, 0),
                payload3: user.cart.map(item => item.amount).reduce((a,b) => a+b, 0),
            }
        }
    }
    else {
        return {
            type: 'SET_CURRENT_USER_CART',
            payload: [],
            payload2: 0,
            payload3: 0
        }
    }
}

export function setCurrentUser(user) {
    if(!isEmpty(user)) {
        return {
            type: 'SET_CURRENT_USER',
            payload: user.user.email
        }
    }else {
        return {
            type: 'SET_CURRENT_USER',
            payload: user
        }
    }
}

export function setAuthorizationToken(token) {
    if(token) {
        axios.defaults.headers.common['authorization'] = `Brearer ${token}`;
    } else {
        delete axios.defaults.headers.common['authorization'];
    }
}

// Opening the sign In Form and then adding products
export function openingForm(e) {
    e.preventDefault();
    const products = store.getState().shoppingCart.products;
    const productModel = e.target.id;
    const serial = e.target.name;
    const category = e.target.value;
    const email = store.getState().user.email;
    if(store.getState().user.isAuthnticated === true){ 
        
        if(productModel.length > 5) {
            var objIndex = products.findIndex((obj => obj.model === productModel));
        }else {
            objIndex = products.findIndex((obj => obj.serial === serial));
        }
        //If item excist in cart
        if(objIndex >= 0) {
            upadateItemInCart(category, productModel, email, serial, objIndex);
        }
        //If items doesn't excist 
        else {
            addItemToCart(category, productModel, email, serial);
        }
    }
    else {
        store.dispatch(openSignForm());
    }
}

export function addItemToCart(category, model, email, serial) {
    fetch(serial > 0 ?
        `https://hamiltonbeach.herokuapp.com/api/spare_parts/${model.slice(0,5)}/${serial}`:
        `https://hamiltonbeach.herokuapp.com/api/products/${category}/${model}`)
            .then(res => res.json())
            .then(myJson => {
                const productInCart = {
                    email: store.getState().user.email,
                    model: myJson[0].model? myJson[0].model: myJson[0].product_model,
                    price: myJson[0].price,
                    serial: myJson[0].part_model? myJson[0].part_model : '0',
                    amount: 1,
                    image_url: myJson[0].image_url,
                    category: myJson[0].type?myJson[0].type:myJson[0].hebrew_name
                }
                fetch(`https://hamiltonbeach.herokuapp.com/api/add-item`, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: email,
                        model: productInCart.model, 
                        price: myJson[0].price,
                        serial: productInCart.serial,
                        amount: 1, 
                        image_url: myJson[0].image_url,
                        category: productInCart.category
                    })
                })
                .then(res => {
                    return (
                        store.dispatch({type: 'ADD_TO_CART', payload: productInCart, payload2: productInCart.price}),
                        openCartForm()
                    )
                })
            })
}

export function upadateItemInCart(category, model, email, serial, objIndex) {
    const products = store.getState().shoppingCart.products;
    const updatedObj = { ...products[objIndex], amount: products[objIndex].amount + 1};
    const updatedProducts = [...products.slice(0, objIndex), updatedObj,...products.slice(objIndex + 1)];
    fetch(Number(serial) > 0 ?
        `https://hamiltonbeach.herokuapp.com/api/spare_parts/${model.slice(0,5)}/${serial}`:
        `https://hamiltonbeach.herokuapp.com/api/products/${category}/${model}`)
            .then(res => res.json())
            .then(myJson => {
                const productInCart = {
                    email: store.getState().user.email,
                    model: myJson[0].model? myJson[0].model: myJson[0].product_model,
                    price: myJson[0].price,
                    serial: myJson[0].serial,
                    amount: store.getState().shoppingCart.products[objIndex].amount + 1,
                    image_url: myJson[0].image_url,
                    category: myJson[0].type?myJson[0].type:myJson[0].hebrew_name
                }
                fetch(`https://hamiltonbeach.herokuapp.com/api/update-item`, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: email,
                        model: productInCart.model, 
                        price: myJson[0].price,
                        serial: productInCart.serial,
                        amount: productInCart.amount, 
                        image_url: myJson[0].image_url,
                        category: productInCart.category
                    })
                })
                .then(res => {
                    return (
                        store.dispatch({type: 'UPDATE_CART', payload: updatedProducts, payload2: products[objIndex].price}),
                        openCartForm()
                    )
                })
            })
}

//Delete product from cart
export function deleteProduct(e) {
    const products = store.getState().shoppingCart.products;

    if(e.target.name > 0){
        var productToDelete = products.filter(item => item.serial=== e.target.name);
        var chosenProductModel = productToDelete[0].serial; 
        var productIndex = products.findIndex(item => item.serial === chosenProductModel);
    }else {
        productToDelete = products.filter(item => item.model=== e.target.id);
        chosenProductModel = productToDelete[0].model; 
        productIndex = products.findIndex(item => item.model === chosenProductModel);
    }

    products.splice(productIndex,1);


    fetch(`https://hamiltonbeach.herokuapp.com/api/delete-item`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: productToDelete[0].email,
            model: productToDelete[0].model,
            serial: productToDelete[0].serial,
            amount: productToDelete[0].amount})
    })
    .then(res => res.json())
    .then(item => {
        return (
            store.dispatch({type:'DELETE_PRODUCT_FROM_CART', 
                payload: products,
                payload2: productToDelete[0].amount,
                payload3: productToDelete[0].amount * productToDelete[0].price})
        )
    })
}

//Clear all input fields in singin and register form
function clearFields() {
    document.querySelector('.signIn-email-input').value = '';
    document.querySelector('.signIn-lock-input').value = '';
    document.querySelector('.register-email-input').value = '';
    document.querySelector('.register-name-input').value = '';
    document.querySelectorAll('.register-lock-input')[0].value = '';
    document.querySelectorAll('.register-lock-input')[1].value = '';
}

//Opening the sign in form
export function openSignForm() {
    return function(dispatch) {
        clearFields();
        dispatch({type: 'OPEN_SIGN_FORM'})
    }
}

// Closing the sign in form
export function closingSignForm() {
    clearFields();
    return store.dispatch({type: 'CLOSE_SIGN_FORM'})
}

// Opening the cart form
export function openCartForm() {
    return store.dispatch({type: 'OPEN_CART_FORM'})
}

// Closing the cart form
export function closingCartForm() {
    return store.dispatch({type: 'CLOSE_CART_FORM'})
}


//changing signing in form display
export function changingForm() {
    if(store.getState().form.signInDisplay === 'flex') {
        clearFields();
        return store.dispatch({type: 'CHANGING_FORM_1'})
    }
    clearFields();
    return store.dispatch({type: 'CHANGING_FORM_2'})
}

//User logout
export function logout(e) {
    return function (dispatch) {
        e.preventDefault();
        localStorage.removeItem('jwt');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        dispatch(setCart([]));
    }
}

//Plus button for adding an item
export function plusProduct(e) {
    const products = store.getState().shoppingCart.products;
    var itemToIncrease;
    if(e.target.name > 0){
        itemToIncrease = products.filter(item => item.serial=== e.target.name);
    }else {
        itemToIncrease = products.filter(item => item.model=== e.target.id);
    }
    itemToIncrease[0].amount++;
    fetch(`https://hamiltonbeach.herokuapp.com/api/update-item`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: itemToIncrease[0].email,
            model: itemToIncrease[0].model,
            serial: itemToIncrease[0].serial,
            amount: itemToIncrease[0].amount})
    })
    .then(res => res.json())
    .then(item => {
        return (
            store.dispatch({type:'PLUS_BUTTON', 
                payload: products,
                payload2: itemToIncrease[0].price,
            })
        )
    })
}

//Minus button for adding an item
export function minusProduct(e) {
    if(document.querySelector(`#model-${e.target.name> 0 ? e.target.name :e.target.id}`).innerHTML > 1) {
        const products = store.getState().shoppingCart.products;
        var itemToDecrease;
        if(e.target.name > 0){
            itemToDecrease = products.filter(item => item.serial === e.target.name);
        }else {
            itemToDecrease = products.filter(item => item.model === e.target.id);
        }
        itemToDecrease[0].amount--;
        fetch(`https://hamiltonbeach.herokuapp.com/api/update-item`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: itemToDecrease[0].email,
                model: itemToDecrease[0].model,
                serial: itemToDecrease[0].serial,
                amount: itemToDecrease[0].amount})
        })
        .then(res => res.json())
        .then(item => {
            return (
                store.dispatch({type:'MINUS_BUTTON', 
                    payload: products,
                    payload2: itemToDecrease[0].price})
            )
        })
    }
}
