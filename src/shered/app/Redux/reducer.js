import isEmpty from 'lodash/isEmpty';

export const initialState = {
    accordionToggleDis1: 'none',
    accordionToggleDis2: 'none',
    authorizedStores: [],
    cartFormDisplay: 'none',
    chosenPart: [],
    chosenProduct: [],
    chosenRecipe: [],
    chosenRecipeIngredients: [],
    chosenRecipeInstructions: [],
    chosenProductFeatures: [],
    chosenProductCategory: [],
    chosenProductCategoryDetails: [],
    error: '',
    form: {
        signInDisplay: 'flex',
        registerDisplay: 'none',
        display: 'none',
        error: 'none',
        registerError: 'none',
        passwordError: 'none'
    },
    pageHeight: null,
    productCategoryBackgroundImage: null,
    products: [],
    productsCategories: [],
    productsImages: [],
    recipes: [],
    registeration: {
        navText: 'התחברות/ הרשמה',
    },
    serviceLocationsList: [],
    shoppingCart: {
        products: [],
        totalCartPrice: 0,
        totalItemsInCart: 0,
    },
    sliderImages: [],
    sparePartsByProductModel: [],
    sparePartsPage: {
        partsGridDisplay: 'none',
        situationDisplay: 'none',
        sparePartsByProductModel: [],
    },
    translateYHidden: '-400px',
    user: {
        isAuthnticated: false,
        email: '',
    }
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIVE_PRODUCTS':
            return {
                ...state, 
                products: action.payload,
            }
        case 'RECIVE_CART':
            return {
                ...state, 
                shoppingCart: {
                    products: action.payload,
                    totalItemsInCart: action.payload3,
                    totalCartPrice: action.payload2
                },
            }

        case 'ADD_TO_CART':
            return {
                ...state,
                shoppingCart: {
                    products: [...state.shoppingCart.products, action.payload],
                    totalItemsInCart: state.shoppingCart.totalItemsInCart = state.shoppingCart.totalItemsInCart + 1, 
                    totalCartPrice: state.shoppingCart.totalCartPrice = state.shoppingCart.totalCartPrice + action.payload2
                } 
            }
        case 'UPDATE_CART':
            return {
                ...state,
                shoppingCart: {
                    products: action.payload,
                    totalItemsInCart: state.shoppingCart.totalItemsInCart = state.shoppingCart.totalItemsInCart + 1,
                    totalCartPrice: state.shoppingCart.totalCartPrice = state.shoppingCart.totalCartPrice + action.payload2
                } 
            }
        case 'DELETE_PRODUCT_FROM_CART':
            return {
                ...state,
                shoppingCart: {
                    products: [...action.payload],
                    totalItemsInCart: state.shoppingCart.totalItemsInCart = state.shoppingCart.totalItemsInCart - action.payload2,
                    totalCartPrice: state.shoppingCart.totalCartPrice = state.shoppingCart.totalCartPrice - action.payload3
                } 
            }
        case 'SPARE_PARTS_FOUND':
            return {
                ...state, 
                sparePartsPage: {
                    situationDisplay: 'none',
                    partsGridDisplay: 'flex',
                    sparePartsByProductModel: action.payload,
                }
            }
        case 'SPARE_PARTS_NOT_FOUND':
            return {
                ...state, 
                sparePartsPage: {
                    situationDisplay: 'block',
                    partsGridDisplay: 'none',
                    sparePartsByProductModel: [],
                },
                chosenProduct: []
            }
        case 'RECIVE_RIGHT_PRODUCT':
            return {
                ...state,
                chosenProduct: action.payload,
            }
        case 'RECIVE_INGREDIENTS':
            return {
                ...state,
                chosenRecipeIngredients: action.payload,
            }
        case 'RECIVE_FEATURES':
            return {
                ...state,
                chosenProductFeatures: action.payload,
            }
        case 'RECIVE_INSTRUCTIONS':
            return {
                ...state,
                chosenRecipeInstructions: action.payload
            }
        case 'RECIVE_RIGHT_SPARE_PART':
            return {
                ...state,
                chosenPart: action.payload,
            }
        case 'RECIVE_RIGHT_PRODUCT_CATEGORY':
            return {
                ...state,
                chosenProductCategory: action.payload,
            }
        case 'RECIVE_RIGHT_PRODUCT_CATEGORY_DETAILS':
            return {
                ...state,
                chosenProductCategoryDetails: action.payload[0],
            }
        case 'RECIVE_RIGHT_RECIPE':
            return {
                ...state,
                chosenRecipe: action.payload,
            }
        case 'RECIVE_SLIDER_IMAGES':
            return {
                ...state, 
                sliderImages: action.payload,
            }
        case 'RECIVE_SERVICE_LOCATIONS':
            return {
                ...state, 
                serviceLocationsList: action.payload,
            }
        case 'RECIVE_AUTHORIZED_SELLERS':
            return {
                ...state, 
                authorizedStores: action.payload,
            }
        case 'RECIVE_PRODUCT_BACKGROUND_IMAGE':
            return {
                ...state, 
                productCategoryBackgroundImage: action.payload,
            }
        case 'RECIVE_RECIPES':
            return {
                ...state, 
                recipes: action.payload,
            }
        case 'RECIVE_PRODUCT_IMAGES':
            return {
                ...state, 
                productsImages: action.payload,
            }
        case 'RECIVE_PRODUCT_CATEGORY':
            return {
                ...state, 
                productsCategories: action.payload,
            }
        case 'RECIVE_SPARE_PARTS_BY_MODEL':
            return {
                ...state, 
                sparePartsByProductModel: action.payload,
            }
        case 'OPEN_ACCORDION_1':
            return {
                ...state, 
                accordionToggleDis1: 'flex',
            }
        case 'CLOSE_ACCORDION_1':
            return {
                ...state, 
                accordionToggleDis1: 'none',
            }
        case 'OPEN_ACCORDION_2':
            return {
                ...state, 
                accordionToggleDis2: 'flex',
            }
        case 'CLOSE_ACCORDION_2':
            return {
                ...state, 
                accordionToggleDis2: 'none',
            }
        case 'OPEN_SIGN_FORM':
            return {
                ...state, 
                form: {
                    signInDisplay: 'flex',
                    registerDisplay: 'none',
                    display: 'block',
                    error: 'none',
                    registerError: 'none',
                    passwordError: 'none'
                },
            }
        case 'CLOSE_SIGN_FORM':
            return {
                ...state, 
                form: {
                    signInDisplay: 'flex',
                    registerDisplay: 'none',
                    display: 'none',
                    error: 'none',
                    registerError: 'none',
                    passwordError: 'none'
                },
            }
        case 'CLOSE_CART_FORM':
            return {
                ...state, 
                cartFormDisplay: 'none',
            }
        case 'OPEN_CART_FORM':
            return {
                ...state, 
                cartFormDisplay: 'flex',
            }
        case 'CHANGING_FORM_1':
            return {
                ...state, 
                form: {
                    signInDisplay: 'none',
                    registerDisplay: 'flex',
                    display: 'block',
                    error: 'none',
                    registerError: 'none',
                    passwordError: 'none'
                },
            }
        case 'CHANGING_FORM_2':
            return {
                ...state, 
                form: {
                    signInDisplay: 'flex',
                    registerDisplay: 'none',
                    display: 'block',
                    error: 'none',
                    registerError: 'none',
                    passwordError: 'none'
                },
            }
        case 'USER_REGISTRATION':
            return {
                ...state, 
                registeration: {
                    navText: 'התנתק',
                }
            }
        case 'SIGNIN_ERROR':
            return {
                ...state, 
                form: {
                    signInDisplay: 'flex',
                    registerDisplay: 'none',
                    display: 'block',
                    error: 'block',
                    registerError: 'none',
                    passwordError: 'none'
                },
            }
        case 'REGISTER_ERROR':
            return {
                ...state, 
                form: {
                    signInDisplay: 'none',
                    registerDisplay: 'flex',
                    display: 'block',
                    error: 'none',
                    registerError: 'block',
                    passwordError: 'none'
                },
            }
        case 'PASSWORD_ERROR':
            return {
                ...state, 
                form: {
                    signInDisplay: 'none',
                    registerDisplay: 'flex',
                    display: 'block',
                    error: 'none',
                    registerError: 'none',
                    passwordError: 'block'
                },
            }
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                user: {
                    isAuthnticated: !isEmpty(action.payload),
                    email: action.payload,
                    
                }
            }
        case 'SET_CURRENT_USER_CART':
            return {
                ...state, 
                shoppingCart: {
                    products: action.payload,
                    totalCartPrice: action.payload2,
                    totalItemsInCart: action.payload3,
                },
            }
        case 'PLUS_BUTTON':
            return {
                ...state, 
                shoppingCart: {
                    products: [...action.payload],
                    totalItemsInCart: state.shoppingCart.totalItemsInCart = state.shoppingCart.totalItemsInCart + 1,
                    totalCartPrice: state.shoppingCart.totalCartPrice = state.shoppingCart.totalCartPrice + action.payload2
                } 
            }
        case 'MINUS_BUTTON':
            return {
                ...state, 
                shoppingCart: {
                    products: [...action.payload],
                    totalItemsInCart: state.shoppingCart.totalItemsInCart = state.shoppingCart.totalItemsInCart - 1,
                    totalCartPrice: state.shoppingCart.totalCartPrice = state.shoppingCart.totalCartPrice - action.payload2
                } 
            }
        case 'OPEN_NAV':
            return {
                ...state, 
                translateYHidden: '10px'
            }

        case 'CLOSE_NAV':   
            return {
                ...state, 
                translateYHidden: '-400px'
            }

        case 'ERROR':
            return {
                ...state, 
                error: action.payload 
            }

        default:
            return state;
    }
}