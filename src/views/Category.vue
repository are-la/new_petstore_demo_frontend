<template>
    {{category}}
    <el-table :data="products" stripe style="width: 100%">
    <el-table-column prop="productid" label="Product Id" width="180" />
    <el-table-column prop="category" label="Category" width="180" />
    <el-table-column prop="name" label="Name" />
  </el-table>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
export default {
    props: ['category'],
    data(){
        return {
            products: [
                {
                    productid: "",
                    category: "",
                    name: "",
                }
            ]
        }
    },
    mounted: async function() {
        let productlist = await this.getProduct(this.category);
        // console.log(this.category);
        this.products = productlist.data.productList;
    },
    methods: {
        getProduct(category) {
            return axios.get("/product/all",{
                params: {
                    category: category
                }
            });
        },
        getCategory() {
            return this.$axios.$get("/categories/" + this.Product.categoryId);
        },
    },

}
</script>