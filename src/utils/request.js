import axios from "axios";

//引入文件配置
import config from "../config";
import router from "../router";
import {ElMessage} from "element-plus";

const CODE={
    SUCCESS:200,  //成功
    PARAM_ERROR:"参数错误",  
    USER_ACCOUNT_ERROR:"账号或密码错误",
    USER_LOGIN_ERROR:30001,   //用户未登入
    BUSINESS_ERROR:40001,   //业务请求失败
    AUTH_ERROR:"认证失败或TOKEN过期",
    NETWORK_ERROR:"网络请求异常，请稍后重试"
};

//创建一个axios对象，并赋予默认值
const instance=axios.create({
    baseURL:config.baseApi,
    timeout:8000
});

//请求拦截
instance.interceptors.request.use(function(req){
    return req;
});


//响应拦截
instance.interceptors.response.use(function(res){
    
    let {data,msg,code} =res.data;
    console.log(code);
    if(code === 200){
        return data;
    }else if(code === 10001){
        return Promise.reject(msg || CODE.USER_ACCOUNT_ERROR);
    }else if(code === 50001){
        ElMessage.error(msg || CODE.AUTH_ERROR);
        setTimeout(() => {
            router.push("/login");
        },3000);
        return Promise.reject(msg || CODE.AUTH_ERROR);
    }else{
        ElMessage.error(msg || CODE.NETWORK_ERROR);
        return Promise.reject(msg || CODE.NETWORK_ERROR);
    }
    
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