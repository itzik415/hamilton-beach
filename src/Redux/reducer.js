
export const initialState = {
    sliderImages: [],
    accordionToggleDis1: 'none',
    accordionToggleDis2: 'none',
    translateYHidden: '-400px',
    products: [],
    serviceLocationsList: [],
    error: '',
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
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
        case 'RECIVE_PRODUCTS':
            return {
                ...state, 
                products: action.payload,
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