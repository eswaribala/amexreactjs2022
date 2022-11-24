import { combineReducers } from 'redux'
import amexChannelReducer from "./channel/amexChannelReducer";


const rootReducer = combineReducers({
    channelReducer: amexChannelReducer
})

export default rootReducer
