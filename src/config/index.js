let env=import.meta.env.MODE || "pord";

let envConfig={
    dev:{
        baseApi:"/api",
        mockApi:"http://127.0.0.1:4523/mock/410799/api"
    },
    test:{
        baseApi:"",
        mockApi:"http://127.0.0.1:4523/mock/410799/api"
    },
    pord:{
        baseApi:"",
        mockApi:"http://127.0.0.1:4523/mock/410799/api"
    }
};

export default {
    env,
    mock:false,
    ...envConfig[env],
    storage:"user"
};