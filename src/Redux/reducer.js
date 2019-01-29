// import { changingSliderPhoto } from './actions';


export const initialState = {
    currentIndex: 1,
    translateValue: 0,
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GROW_SLIDER_PROPERTIES':
            console.log('1','index ' + initialState.currentIndex,'translate ' + initialState.translateValue)
            return {
                ...state, 
                currentIndex: action.payload,
                translateValue: action.payload2,
            }
        case 'RESTART_SLIDER_PROPERTIES':
            console.log('2','index ' + initialState.currentIndex,'translate ' + initialState.translateValue)
            return {
                ...state, 
                currentIndex: action.payload,
                translateValue: action.payload2,
            }
        case 'DECREASE_SLIDER_PROPERTIES':
            console.log('3','index ' + initialState.currentIndex,'translate ' + initialState.translateValue)
            return {
                ...state, 
                currentIndex: action.payload,
                translateValue: action.payload2,
            }
        case 'RESTART_SLIDER_PROPERTIES_2':
            console.log('4','index ' + initialState.currentIndex,'translate ' + initialState.translateValue)
            return {
                ...state, 
                currentIndex: action.payload,
                translateValue: action.payload2,
            }

        default:
            return state;
    }
}