<template>
    <div class="crumb">
      <i class="iconfont icon-yonghu"></i>位置：任务管理
      <a href="javascript:void(0);" class="fr" @click="goback"><i class="iconfont icon-yonghu"></i>返回上一级</a>
    </div>
</template>
<script>
export default {
  name: 'Crumb',
  props: ['cur'],
  data() {
    return {
      crumb:[
        {cur:'1',name:'任务管理'},
        {cur:'2',name:'任务管理'}
      ]
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);//返回上一层
    }
  }
}

</script>
