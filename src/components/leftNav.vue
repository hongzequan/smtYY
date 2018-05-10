<template>
    <div class="leftNav">
      <ul>
        <li><router-link to="/home">首页</router-link></li>
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
  data() {
    return {

    }
  },
  methods: {
    
  }
}

</script>
<style>
  .leftNav{float: left;width: 200px;height: 100%;background: #324057;color: #fff;font-size: 16px;}
  .leftNav ul{line-height: 40px;}
  .leftNav ul p{padding:0 15px;}
  .leftNav ul li{}
  .leftNav ul li a{display: block;padding: 0 15px;color: #fff;}
  .leftNav ul li a:hover,.leftNav ul li.active a{background: #666;}
</style>
