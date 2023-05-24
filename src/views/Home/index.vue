<script setup lang='ts'>
import {loginAPI} from "@/apis/login"
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css"
import useUserStore from "@/stores/user"
import {  } from 'vue-router'
import {  } from 'vue'
let UserStore = useUserStore();
console.log(UserStore.menuRoutes);

let handleClick=async ()=>{
    ElMessage({
    message: '导入成功',
    type: 'success',
  })
 const res = await loginAPI();
 console.log(res);
 
}
</script>
<template>
   <div class="box">
    <el-button :plain="true" @click="handleClick">success</el-button>
    <span >可接受的就爱看</span>

   </div>
</template> 
<style lang='scss' scoped>
.box{
    span{
        color: red;
    }
}

</style>