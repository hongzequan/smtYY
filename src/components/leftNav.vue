<template>
    <div class="leftNav" :class="isClick==true?'indent':''">
      <div class="user-info">
        <div class="user-img">
          <img src="../assets/images/user-image.png" alt="">
        </div>
        <div class="user-name">
          hongzequan
        </div>
      </div>
      <!-- <ul>
        <li class="active"><router-link to="/home">首页</router-link></li>
        <li><router-link to="/home/customerService">任务列表(客服)</router-link></li>
        <li><router-link to="/home/keyword">任务列表(选词)</router-link></li>
        <li><router-link to="/home/keywordList">关键词管理</router-link></li>
        <li><router-link to="/home/keywordAdd">新增关键词</router-link></li>
        <li><router-link to="/home/lexicon">词库</router-link></li>
      </ul> -->
      <ul class="lever1">
        <li v-for="(menuItem,index) in menu">
          <a href="javascript:void(0);" :data-url="menuItem.url" @click="goMenu(menuItem.url)"><i class="iconfont" :class="menuItem.icon"></i>{{menuItem.title}}</a>
          <ul v-if="menuItem.children" class="lever2">
            <li v-for="(subMenuItem,subIndex) in menuItem.children"  @click="goMenu(subMenuItem.url)">
                <a href="javascript:void(0);" :data-url="subMenuItem.url">{{subMenuItem.title}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'LeftNav',
  props: ['isClick'],
  data() {
    return {
      menu:[
        {title:'首页',icon:'icon-yonghu',url:'/home'},
        {title:'任务列表',icon:'icon-yonghu',url:'/',"children": [
          {title: "客服",url:'/home/customerService'},{title:"选词",url:'/home/keyword'}]
        },
        {title:'关键词管理',icon:'icon-yonghu',url:'/home/keywordList'},
        {title:'词库',icon:'icon-yonghu',url:'/home/lexicon'},
      ],
    }
  },
  mounted: function() {
    console.log('leftNav获取左边菜单栏')
    // console.log(this.props)
  },
  methods:{
    goMenu(url){
      console.log(url)
      if(url!='/'){
        this.$router.push(url)
      }      
    }
  }
}

</script>
<style scoped>

</style>
