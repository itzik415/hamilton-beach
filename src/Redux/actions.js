import { store } from "./store";

// import { initialState } from "./reducer";
// import { store } from './store';

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

export function accordionToggle1 () {
    if(store.getState().accordionToggleDis1 === 'none'){
        return {
            type: 'OPEN_ACCORDION_1'
        }
    } 
    return {
        type: 'CLOSE_ACCORDION_1'
    }
}

export function accordionToggle2 () {
    if(store.getState().accordionToggleDis2  === 'none'){
        return {
            type: 'OPEN_ACCORDION_2'
        }
    } 
    return {
        type: 'CLOSE_ACCORDION_2'
    }
}