<template>
  <div class="header">
    <h1 class="fl logo">
      <img src="../assets/images/logo.png" alt="logo">
    </h1>
    <div class="right-box clearfix">
      <div class="fl sliderMenu">
        <i class="iconfont icon-menu" @click="toggleNav"></i>
      </div>
      <div class="fr exit">
        <!-- <span>欢迎您登录：abc</span> -->
        <el-dropdown size="small">
          <span class="el-dropdown-link">
            <i class="iconfont icon-yonghu mr5"></i>洪泽权<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/login">退出</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      indent:false
    }
  },
  methods: {
    toggleNav() {
       this.indent=!this.indent
       console.log(this.indent)
       this.$emit('change', this.indent); //Hub触发事件
    }
  }
}

</script>
