import http from './http-common'
//step4
const create = data => {
    return http.post("/api/users/channels", data);
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
