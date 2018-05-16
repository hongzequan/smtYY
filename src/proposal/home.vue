<template>
  <div class="wrap">
    <Header  @change="change"></Header>
    <div class="panel-center">
      <LeftNav :isClick="isClick"></LeftNav>
      <div class="panel-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import header from '../components/header'
import leftNav from '../components/leftNav'

export default {
  name: 'home',
  components: {
    'Header': header,
    'LeftNav': leftNav
  },
  data() {
    return {
       // 左边菜单栏是否缩进
       isClick: 'false'
    }
  },
  mounted: function() {
    console.log('home页面加载完毕');
  },
  methods: {
     // 用于接收头部按钮的点击事件
     change(data) {
        this.isClick = data;
     }
  }

}

</script>
