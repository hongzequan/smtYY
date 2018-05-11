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
      <el-dialog
        title="登录失败"
        :visible.sync="centerDialogVisible"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        width="30%"
        center>
        <span>{{errorMsg}}</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: 'hongzequan',
        password: '123123',
      },
      errorMsg:'',
      centerDialogVisible: false
    }
  },
  methods: {
    onSubmit() {
      let that=this
      that.$post('/login',that.form)
      .then(function(response){
        if(response.flag=='Y'){
          that.$router.push({ path: '/home' });
        }else{
          that.errorMsg=response.data.msg
          that.centerDialogVisible = true
        }
      })
      .catch(function(error){
        console.log(error)
      })
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