<template>
  <header class="clearfix">
    <h1 class="fl logo">
      <img src="../assets/images/logo.png" alt="logo">
    </h1>
    <div class="fr right-box">
      <!-- <span>欢迎您登录：abc</span> -->
      <el-dropdown size="mini">
        <span class="el-dropdown-link">
	    欢迎您登录：洪泽权<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><router-link to="/login">退出</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  }
}

</script>
<style scoped>
header {position: relative;height: 60px;background: #1b222b;z-index: 1;}
header .logo{width: 200px;height: 60px;line-height: 60px;text-align: center;background: #2b2b2b;}
header .logo img{vertical-align: middle;}
header .right-box{color: #fff;line-height: 30px;height: 60px;padding: 15px;}
</style>
<style>
	header .el-dropdown{color: #fff;}
</style>