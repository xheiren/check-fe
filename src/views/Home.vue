<script>
export default {
    
}
</script>

<template>

    <el-container>
        <el-aside></el-aside>
        <el-container>
            <el-header></el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<style lang="scss">
    .el-aside{
        width: 200px;
        background-color: #ccc;
        height: 100vh;
    }
    .el-header{
        height: 60px;
        background-color: #ccc;
    }
    .el-main{
        .main{
            height: 100%;
        }
        
    }
</style>