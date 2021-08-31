import axios from "axios";

//引入文件配置
import config from "../config";

//创建一个axios对象，并赋予默认值
const instance=axios.create({
    baseURL:config.baseApi,
    timeout:8000
});

//请求拦截
instance.interceptors.request.use(function(req){
    console.log(req);
    return req;
});


//响应拦截
instance.interceptors.response.use(function(res){
    
    let {data} =res;
    return data;
});

//定义一个函数，可以在执行请求之前，做一次配置
function server(options) {

    //当使用mock请求的时候，就把请求的路径改为mockapi
    options.baseURL=config.mock?config.mockApi:config.baseApi;
    
    return instance(options);
};

//给instance函数添加方法
["get","post","put","delete","patch"].forEach((item) => {
    server[item]=function(url,opthons){
        return server({
            url,
            method:item,
            data:opthons
        });
    };
});

export default server;