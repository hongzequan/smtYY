<template>
  <div class="wrap">
    <Header></Header>
    <div class="panel-center">
      <LeftNav></LeftNav>
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

    }
  },
  mounted: function() {
    console.log('home页面加载完毕')
  }
}

</script>
<style scoped>


</style>
