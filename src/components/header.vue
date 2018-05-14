<template>
  <header>
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
  </header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  methods: {
    toggleNav() {
       this.$emit('change','true'); //Hub触发事件
    }
  }
}

</script>
<style scoped>
header {
  position: relative;
  height: 60px;
  background: #fff;
  z-index: 1;
  border-bottom: 1px solid #72a8fe;
}

header .logo {
  width: 215px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #72a8fe;
}

header .logo img {
  vertical-align: middle;
}

header .right-box {
  overflow: hidden;
  background: #fff;
  line-height: 30px;
  height: 60px;
  padding: 15px;
  border-bottom: 1px solid #72a8fe;
}
.header .exit i{color: #738db3;}

header .sliderMenu i{color: #72a8fe;font-size: 30px;cursor: pointer;}

</style>
