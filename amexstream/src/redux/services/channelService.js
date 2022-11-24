//import http from './http-common'
//step4
const create = data => {
    return fetch("http://localhost:4000/api/users/channels", {
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
