<template>
    this is home page!

 <el-table :data="categorys" stripe style="width: 100%">
    <el-table-column prop="catid" label="Catid" width="180" />
    <el-table-column  label="Name" width="180" >
        <template #default="scope">
            <el-button type="primary" @click="redirect(scope.row.catid)">{{scope.row.name}}</el-button>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from '@vue/reactivity'
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import router from '../router';
export default {
    name: "home",
    setup() {
        const categorys = ref([])
        const getCategory = () => {
            return axios.get("/category/all").then(res => {
                // console.log(res.data.categoryList);
                return res;
            }).catch(e => {
                return e.res.data;
            })
        }
        const redirect = (name) => {
            router.push({ path: "/category/"+name});
        }
        onMounted(async () => {
            const data = await getCategory();
            // data.value = await getCategory().data.categoryList;
            // console.log(data);
            categorys.value = data.data.categoryList;
        })
        return {
            categorys,
            redirect
        }
    }
}
</script>