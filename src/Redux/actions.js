import { initialState } from './reducer';
import { store } from './store';

export function goToNextSlide() {
    // console.log(store.getState().slider.images.length)
    console.log(store.getState().slider.currentImage)
    console.log(store.getState().slider.currentIndex)
    console.log(store.getState().slider.images.length)
    if(store.getState().currentIndex === store.getState().slider.images.length - 1) {
        return {
            type: 'RER',
            payload: initialState.slider.currentIndex = 0,
            payload2: initialState.slider.translateValue = 0,
        }
    }
    
    return {
        type: 'RER',
        payload: initialState.slider.currentIndex++,
        payload2: initialState.slider.translateValue + -(slideWidth()),
    }
}

function slideWidth() {
    return document.querySelector('.slider').clientWidth
}