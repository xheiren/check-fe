import {createRouter,createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";

const routes=[
    {
        name:"home",
        path:"/",
        component:Home,
        redirect:"/welcome",
        children:[
            {
                name:"welcome",
                path:"/welcome",
                component:Welcome
            }
        ]
    },
    {
        name:'login',
        path:"/users/login",
        component:Login
    }
];

let router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;