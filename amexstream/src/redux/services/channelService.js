//import http from './http-common'
//step4
import urlData from "../../assets/data/url.json";

const create = data => {
    return fetch(urlData.data.apiUrl+"/channels", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((d) =>d)
};

const ChannelService = {
    //getAll,
    //get,
    create,
    //update,
    //remove,
    //removeAll,
    //findByTitle
};
export default ChannelService;
