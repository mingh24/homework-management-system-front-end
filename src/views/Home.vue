<template>
    <div class="home-wrap">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-fa fa-home"></i> 首页
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-wrap">
            <el-container class="main-container">
                <p>
                    欢迎来到作业管理系统！
                </p>
            </el-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home-wrap {
        width: 100%;
        height: 100%;
    }

    .main-wrap {
        width: 100%;
        height: 100%;
        margin-top: 10px;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 5px;
    }

    .main-container {
        width: 90%;
        height: 100%;
        text-align: center;
        margin: auto;
    }
</style>