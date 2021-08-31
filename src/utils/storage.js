import config from "../config";



export default {
    getItem(item){
        let str=this.getAll();
        return str[item];
    },
    setItem(item,data){
        let str=this.getAll();
        str[item]=data;
        window.localStorage.setItem(config.storage,JSON.stringify(str));
        return "添加成功";
    },
    getAll(){
        return JSON.parse(window.localStorage.getItem(config.storage));
    },
    removeItem(item){
        let str=this.getAll();
        delete str[item];
        window.localStorage.setItem(config.storage,JSON.stringify(str));
    },
    removeAll(){
        window.localStorage.removeItem(config.storage);
    }
}