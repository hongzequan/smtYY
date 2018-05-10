<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
}

</script>
<style>
body,html,#app,.wrap{height: 100%;}
.panel-center{position: absolute;top: 0;left:0;width: 100%;height: 100%;padding-top: 60px;}
.panel-body{position: relative;padding:15px;height: 100%;background: #f5f5f5;overflow-y: auto;}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{margin-bottom: 10px;}
.header-center{white-space: pre-wrap !important;line-height: 0 !important;text-align: center;}
.header-center div{line-height: 20px !important; width: 100% !important;}
</style>
