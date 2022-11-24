import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchChannels} from "../../redux/channel/amexChannelAction";



export const ChannelsContainer = () => {
    const loading = useSelector(state => state.channelReducer.loading)
    const error = useSelector(state => state.channelReducer.error)
    const channels = useSelector(state => state.channelReducer.channelReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchChannels())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? (
        <h2>Loading...</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : (
        <div className="container-sm w-auto">
            {
                console.log(channels)
            }
        </div>
    )
}
