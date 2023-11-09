<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" active-color="rgba(255, 85, 26, 1)" route class="buttomcdl">
      <van-tabbar-item v-for="item,index in arr" :key="item.id" replace :to="item.path">
        <span>{{item.text}}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  // components: {
  // },
  data() {
    return {
      active: 0,
      arr: [
        {
          id: 1,
          path:'/addshops',
          text: '上传',
          active: require('./assets/flactive.svg'),
          inactive: require('./assets/fl.svg'),
        }
      ]
    }

  }

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body{
  background: rgba(0, 0, 0, 0.1);
}

#app {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  
}
.buttomcdl{
  border-top: 1px solid #ccc;
}

</style>
