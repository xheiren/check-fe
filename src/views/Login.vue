<script>
export default {
    name:"login",
    data(){
        return {
            user:{
                userName:"",
                userPwd:""
            },
            rules:{
                userName: [
                    {
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur",
                    }
                ],
                userPwd: [
                    {
                    required: true,
                    message: "请输入密码",
                    trigger: "blur",
                    }
                ]
            }
        }
    },
    methods:{
        login(){
            this.$refs.userForm.validate()
            .then(async ()=>{
                let str=await this.$api.userlogin(this.user);
                if(str){
                    this.$router.push("/welcome");
                    this.$store.commit("saveUserInfo",str)
                    console.log(str);
                }else{
                    
                }
            })
            .catch(err=>{
                console.log(err);
                this.user.userPwd="";
            });
        }
    }
};
</script>

<template>
    <div class="login">
        <el-form :model="user" :rules="rules" status-icon ref="userForm">
            <el-form-item prop="userName">
                <el-input type="text" placeholder="请输入账号" v-model="user.userName" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
    
            <el-form-item prop="userPwd">
                <el-input type="password" placeholder="请输入密码" v-model="user.userPwd" prefix-icon="el-icon-view"></el-input>
            </el-form-item>
        
            <el-form-item>
                <el-button class="btn" round type="primary" @click="login">登入</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss">
    .login{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
    .el-form{
        width: 360px;
        background-color: #fff;
        padding: 26px;
        border-radius: 6px;
        box-shadow: 0 0 13px 2px rgb(136, 136, 136);
    }
    .btn{
        width: 100%;
    }
</style>