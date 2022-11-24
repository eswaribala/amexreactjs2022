import { combineReducers } from 'redux'
import amexChannelReducer from "./channel/amexChannelReducer";


const rootReducer = combineReducers({
    channels: amexChannelReducer
})

export default rootReducer
