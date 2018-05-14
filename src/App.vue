<template>
  <div class="Vue">
    <router-view/>
  </div>
</template>
<script>
import './assets/iconfont/iconfont.css'
export default {
  name: 'App',
}

</script>
<style>
body,html,.Vue,.wrap{height: 100%;}
#app{min-width: 1280px;}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{margin-bottom: 10px;}
/*框架布局*/
.wrap{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-webkit-box-flex: 1;-ms-flex: 1;flex: 1;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}
.panel-center{display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;-webkit-box-flex: 1;-ms-flex: 1;flex: 1;}
.leftNav{overflow: hidden;flex:0 0 215px;background: #2e3643;}
.panel-body{-webkit-box-flex: 1;-ms-flex: 1;flex: 1;padding: 15px;overflow:auto;background: #f2f2f2;}

/*框架布局*/

</style>
