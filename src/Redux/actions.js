import { initialState } from './reducer';
import { store } from './store';


export function goToNextSlide() {
    if(store.getState().currentIndex >= 1 && store.getState().currentIndex < 5) {
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex}`).classList.remove('activePointer');
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex+1}`).classList.add('activePointer');
        return {
            type: 'GROW_SLIDER_PROPERTIES',
            payload: initialState.currentIndex++,
            payload2: initialState.translateValue = initialState.translateValue - 1400 ,
        }    
    } 
    else {
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex}`).classList.remove('activePointer');
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex-4}`).classList.add('activePointer');
        return {
            type: 'RESTART_SLIDER_PROPERTIES',
            payload: initialState.currentIndex = 1,
            payload2:  initialState.translateValue = 0,
        }
    }
}

export function switchingSliderAuto () {
    setInterval(function(){ 
        goToNextSlide();
    }, 3000);
}


export function goToPrevSlide() {
    if(store.getState().currentIndex <= 5 && store.getState().currentIndex >= 1) {
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex}`).classList.remove('activePointer');
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex-1}`).classList.add('activePointer');
        return {
            type: 'DECREASE_SLIDER_PROPERTIES',
            payload: initialState.currentIndex--,
            payload2: initialState.translateValue = initialState.translateValue + 1400,
        }    
    } 
    else {
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex + 4}`).classList.add('activePointer');
        document.querySelector(`.slider-buttons-pointer-${initialState.currentIndex}`).classList.remove('activePointer');
        return {
            type: 'RESTART_SLIDER_PROPERTIES_2',
            payload: initialState.currentIndex = 5,
            payload2: initialState.translateValue = - 5600,
        }
    }    
}

// export function moveSliderWithButton () {
//     const buttonsLength = document.querySelectorAll('#sliderImage').length;
//     for(let i = 0; i < buttonsLength; i++) {
//         document.querySelector(`.slider-buttons-pointer-${i}`).classList.add('activePointer');
//     }   
// }


// if(itemIndex > 0) {
//     for(let i = 0; i < itemsCount; i++) {
//         document.querySelector(`.slider__section-middle-${i}`).style.transform = `translateX(${store.getState().translate+1200}px)`; 
//     }