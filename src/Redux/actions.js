import { store } from "./store";

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

export function getServiceLocations() {
    return function(dispatch) {
        fetch('http://localhost:5000/api/servicelocations')
            .then(response => response.json())
            .then(myJson => dispatch({type: 'RECIVE_SERVICE_LOCATIONS', payload: myJson.map(value => value)}))
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

// for(let i = 0; i < document.querySelectorAll('.hiddenNav-dropDown').length; i++) {
//     document.querySelectorAll('.hiddenNav-dropDown')[i].style.display = 'flex';
    // if(store.getState().dropDown === 'none') {
        // return {type: 'OPEN_DROP_DOWN',}
    // }
    // return {type: 'CLOSE_DROP_DOWN',}
// }
