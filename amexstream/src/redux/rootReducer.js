import { combineReducers } from 'redux'
import productsReducer from './products/productsReducer'

const rootReducer = combineReducers({
    channelReducer: amexChannelReducer
})

export default rootReducer
