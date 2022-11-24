import {CREATE_CHANNEL} from "./types";

const initialState = {
    loading: false,
    channels: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHANNELS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case CREATE_CHANNEL:
            return {
                loading: false,
                channels: action.payload,
                error: ''
            }

        case 'FETCH_CHANNEL_SUCCESS':
            console.log(action.payload);
            return {
                loading: false,
                channels: action.payload,
                error: ''
            }
        case 'FETCH_CHANNEL_FAILURE':
            return {
                loading: false,
                channels: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer

