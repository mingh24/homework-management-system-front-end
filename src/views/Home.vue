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
                <div class="introduction-container">
                    <p>
                        欢迎来到作业管理系统！
                    </p>
                    <p>
                        前端项目地址
                        <el-link href="https://github.com/Yi1275432232/homework-management-system-front-end"
                                 type="primary">
                            homework-management-system-front-end
                        </el-link>
                    </p>
                    <p>
                        后端项目地址
                        <el-link href="https://github.com/Yi1275432232/homework-management-system-back-end"
                                 type="success">
                            homework-management-system-back-end
                        </el-link>
                    </p>
                    <p>
                        我的博客地址
                        <el-link href="https://blog.csdn.net/Yiang0" type="info">Yiang的博客</el-link>
                    </p>
                </div>
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
        text-align: justify-all;
        margin: auto;
    }

    .introduction-container {
        font-size: 16px;
    }
</style>