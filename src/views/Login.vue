<template>
    <el-form @submit.enter.prevent="onenter" :model="form">
        <el-form-item label="Username">
            <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="form.password" />
        </el-form-item>
        <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
import { reactive } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus';
export default {
    name: "login",
    setup() {
        const form = reactive({
            username: "",
            password: ""
        });
        const onenter = () => {
            console.log("enter");
        }
        const onSubmit = () => {
            console.log("submit");
            return axios.post("/user/login", form).then(res => {
                console.log(res.data);
                ElMessage({
                    message: res.data.message,
                    type: 'success'
                    });
            }).catch(e => {
                ElMessage.error(e.response.data)
            })
        }
        return {
            form,
            onSubmit,
            onenter
        }
    },
}
</script>