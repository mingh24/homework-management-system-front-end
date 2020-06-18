<template>
    <div class="teacher-homework-wrap">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-fa fa-book"></i> 作业列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div class="query-form">
                <el-row :gutter="20">
                    <el-col :span="2">
                        <el-button @click="create" icon="el-icon-plus">发布作业</el-button>
                    </el-col>
                    <el-col :offset="10" :span="3">
                        <el-input @keyup.enter.native="query" placeholder="作业编号" v-model="queryForm.homeworkId"/>
                    </el-col>
                    <el-col :span="3">
                        <el-input @keyup.enter.native="query" placeholder="作业标题" v-model="queryForm.homeworkTitle"/>
                    </el-col>
                    <el-col :span="3">
                        <el-button @click="query" icon="el-icon-search" type="primary">搜索</el-button>
                    </el-col>
                </el-row>
            </div>

            <div>
                <p></p>
            </div>

            <el-row justify="center" type="flex">
                <el-pagination
                        :current-page.sync="pageIndex"
                        :page-size="pageSize"
                        :total="pageSize * pageCount"
                        @current-change="getPage"
                        background
                        layout="prev, pager, next"
                >
                </el-pagination>
            </el-row>

            <div>
                <p></p>
            </div>

            <div class="table">
                <el-table :data="tableData" stripe>
                    <el-table-column label="作业编号" prop="homeworkId"/>
                    <el-table-column label="作业标题" prop="homeworkTitle"/>
                    <el-table-column label="作业内容" prop="homeworkContent"/>
                    <el-table-column align="center" label="操作" width="200px">
                        <template slot-scope="scope">
                            <el-button @click="editHomework(scope.row.homeworkId)" size="mini" type="success">编辑</el-button>
                            <el-button @click="deleteHomework(scope.row.homeworkId)" size="mini" type="danger">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <el-dialog :visible.sync="editing" title="编辑" width="30%">
                <el-form :model="entityForm" label-width="70px" ref="form">
                    <el-form-item label="作业编号">
                        <el-input disabled v-model="entityForm.homeworkId"></el-input>
                    </el-form-item>
                    <el-form-item label="作业标题">
                        <el-input v-model="entityForm.homeworkTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="上课地点">
                        <el-input v-model="entityForm.homeworkContent"></el-input>
                    </el-form-item>
                </el-form>
                <span class="dialog-footer" slot="footer">
                    <el-button @click="save" type="primary">确 定</el-button>
                    <el-button @click="editing = false">取 消</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import * as homeworkApi from "@/api/teacher/homework";

    export default {
        name: "TeacherHomework",
        data() {
            return {
                queryForm: {
                    homeworkId: "",
                    homeworkTitle: ""
                },
                entityForm: {},
                tableData: [],
                pageSize: homeworkApi.pageSize,
                pageCount: 1,
                pageIndex: 1,
                editing: false
            };
        },
        methods: {
            query() {
                homeworkApi.getPageCount(this.queryForm.homeworkId, this.queryForm.homeworkTitle).then(res => {
                    this.pageCount = res;
                    this.pageIndex = 1;
                    this.getPage(1);
                });
            },
            getPage(pageIndex) {
                homeworkApi.getPage(pageIndex, this.queryForm.homeworkId, this.queryForm.homeworkTitle).then(res => {
                    this.tableData = res;
                });
            },
            create() {
                this.entityForm = {
                    homeworkTitle: "",
                    homeworkContent: ""
                };
                this.editing = true;
            },
            editHomework(homeworkId) {
                homeworkApi.getHomework(homeworkId).then(res => {
                    this.entityForm = res;
                    this.editing = true;
                });
            },
            save() {
                if (this.entityForm.homeworkId === -1) {
                    homeworkApi.addHomework(this.entityForm).then(() => {
                        this.finishSave();
                    });
                } else {
                    homeworkApi.updateHomework(this.entityForm).then(() => {
                        this.finishSave();
                    });
                }
            },
            finishSave() {
                this.$message.success("成功");
                this.getPage(this.pageIndex);
                this.editing = false;
            },
            deleteHomework(homeworkId) {
                homeworkApi.deleteHomework(homeworkId).then(() => {
                    this.$message.success("删除成功");
                    this.getPage(this.pageIndex);
                });
            }
        },
        created() {
            this.query();
        }
    }
</script>

<style scoped>

</style>