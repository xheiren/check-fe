import request from "../utils/request";

function userlogin(options){
    return request.post("/users/login",options);
};

export default {
    userlogin
};