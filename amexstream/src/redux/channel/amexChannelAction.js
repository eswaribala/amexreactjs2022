import axios from 'axios'

import ChannelDataService from "../services/channelService";
import {CREATE_CHANNEL} from "./types";

export const fetchChannels = () => {
    return (dispatch) => {
        dispatch(fetchChannelsRequest())
        /*
        axios
            .get('http://localhost:4000/channels')
            .then(response => {
                const products = response.data
                setTimeout(() => {  // to emulate some network delay
                    dispatch(fetchChannelsSuccess(products))
                }, 2000)
            })
            .catch(error => {
                dispatch(fetchChannelsFailure(error.message))
            })

         */
    }
}

export const fetchChannelsRequest = () => {
    return {
        type: 'FETCH_CHANNELS_REQUEST'
    }
}

export const fetchChannelsSuccess = channels => {
    return {
        type: 'FETCH_CHANNELS_SUCCESS',
        payload: channels
    }
}

export const fetchChannelsFailure = error => {
    return {
        type: 'FETCH_CHANNELS_FAILURE',
        payload: error
    }
}
//Step3

export const createChannel = (values) => async (dispatch) => {
    try {
        const res = await ChannelDataService.create(values);

        dispatch({
            type: CREATE_CHANNEL,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
