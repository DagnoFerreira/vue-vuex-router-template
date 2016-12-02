<template>
  <router-view></router-view>
</template>

<script>
import Hello from './components/Hello';
import Index from './views/index'
import VuexDemo from './views/vuex-demo.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Index,
    VuexDemo
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
