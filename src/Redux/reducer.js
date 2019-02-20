
export const initialState = {
    accordionToggleDis1: 'none',
    accordionToggleDis2: 'none',
    authorizedStores: [],
    chosenProduct: [],
    chosenRecipe: [],
    chosenProductCategory: [],
    chosenProductCategoryDetails: [],
    error: '',
    pageHeight: null,
    productCategoryBackgroundImage: null,
    products: [],
    productsCategories: [],
    productsImages: [],
    recipes: [],
    serviceLocationsList: [],
    sliderImages: [],
    sparePartsByProductModel: [],
    sparePartsPage: {
        partsGridDisplay: 'none',
        situationDisplay: 'none',
        sparePartsByProductModel: [],
    },
    translateYHidden: '-400px',
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RECIVE_PRODUCTS':
            return {
                ...state, 
                products: action.payload,
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
                chosenProduct: action.payload
            }
        case 'RECIVE_RIGHT_PRODUCT':
            return {
                ...state,
                chosenProduct: action.payload,
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

        case 'OPEN_NAV':
            return {
                ...state, 
                translateYHidden: '0px'
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