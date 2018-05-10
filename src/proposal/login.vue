<template>
    <div class="login-page">
      <el-form ref="form" :model="form" class="login-window" label-width='80px'>
        <el-form-item label="用户名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
          <el-button>忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit() {

      // 跳转内容页
      this.$router.push({ path: '/home' });
    }
  }
}

</script>

<!-- 内部 -->
<style scoped>
.login-page{height: 100%;background: url('../assets/images/login-bg.jpg') no-repeat center;background-size: cover;}
.login-window{position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: 400px;height: 400px;background: rgba(0,0,0,.6);padding:15px;}

</style>
<!-- 外部 -->
<style>
.login-window .el-form-item__label{color: #fff;}
  
</style>