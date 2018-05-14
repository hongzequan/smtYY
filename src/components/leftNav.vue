<template>
    <div class="leftNav" v-bind:class="isClick">
      <div class="user-info">
        <div class="user-img">
          <img src="../assets/images/user-image.png" alt="">
        </div>
        <div class="user-name">
          hongzequan{{isClick}}
        </div>
      </div>
      <ul>
        <li class="active"><router-link to="/home">首页</router-link></li>
        <li><router-link to="/home/customerService">任务列表(客服)</router-link></li>
        <li><router-link to="/home/keyword">任务列表(选词)</router-link></li>
        <li><router-link to="/home/keywordList">关键词管理</router-link></li>
        <li><router-link to="/home/keywordAdd">新增关键词</router-link></li>
        <li><router-link to="/home/lexicon">词库</router-link></li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'LeftNav',
  props: ['isClick'],
  data() {
    return {
      nav:[
        {name:'首页',icon:'icon-yonghu',url:'/home',},
        {name:'任务列表',icon:'icon-yonghu',url:''},
      ],
    }
  },
  mounted: function() {
    console.log('leftNav获取左边菜单栏')
    // console.log(this.props)
  }
}

</script>
<style>
  .leftNav .user-info{padding: 30px 15px;}
  .leftNav .user-info .user-img{margin-bottom: 15px;}
  .leftNav .user-info .user-img img{display: block;margin: 0 auto;}
  .leftNav .user-info .user-name{text-align: center;font-size: 16px;color: #fff;font-weight: bold;white-space: normal;word-wrap: break-word;word-break: break-all;}

  .leftNav ul{line-height: 40px;height: 100%;}
  .leftNav ul p{padding:0 15px;}
  .leftNav ul li{line-height: 50px;}
  .leftNav ul li a{display: block;padding: 0 15px;color: #f6f6f6;font-size: 14px;}
  .leftNav ul li a:hover,.leftNav ul li.active a{background: #424f62;color: #72a8fe;}
</style>
