// import { changingSliderPhoto } from './actions';


export const initialState = {
    slider: {
        currentIndex: 1,
        images: [
            "https://images.unsplash.com/photo-1548347614-7031a4f4f331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80",
            "https://images.unsplash.com/photo-1548335599-8ed902028f3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2046&q=80",
            "https://images.unsplash.com/photo-1548377465-6a6304cd21f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
            "https://images.unsplash.com/photo-1548386135-56c577dceb1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
            "https://images.unsplash.com/photo-1548383315-badadd6f358b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
        ],
        translateValue: 0,
        currentImage: "https://images.unsplash.com/photo-1548347614-7031a4f4f331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
    }
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RER':
            return {
                ...state, 
                slider: {
                    currentIndex: action.payload,
                    images: state.slider.images,
                    currentImage: state.slider.images[initialState.currentIndex],
                    translateValue: action.payload2,
                }
            }

        default:
            return state;
    }
}