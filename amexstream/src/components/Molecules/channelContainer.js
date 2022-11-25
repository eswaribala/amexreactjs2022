import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchChannels} from '../../redux'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./channelContainer.css"

export const ChannelsContainer = () => {
    const loading = useSelector(state => state.channels.loading)
    const error = useSelector(state => state.channels.error)
    const channels = useSelector(state => state.channels.channels)
    const dispatch = useDispatch()
    const columns = [

        {field: 'channelName', header: 'Channel Name'},
        {field: 'description', header: 'Description'},
        {field: 'karmaPoints', header: 'Karma Points'},
        {field: 'active', header: 'Active'},
        {field: 'createdAt', header: 'Created At'}
    ];



    useEffect(() => {
        dispatch(fetchChannels())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const dynamicColumns = columns.map((col,i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return loading ? (

        <h2>Loading...</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : (
        <div className="datatable-editing-demo">
          <div className="p-fluid">
            <h2>Channel Information</h2>

            <div>
                <DataTable value={channels} responsiveLayout="scroll">
                    {dynamicColumns}
                </DataTable>
            </div>
          </div>
        </div>

    )
}
