<template>
  <div>
    <div class="index">This is Index Page!</div>
    <h1>Vuex Demo</h1>
    <section>
      count:  {{count}}
      <button @click="increment()">+</button>
      <button @click="decrement()">-</button>
    </section>
  </div>
</template>
<style scoped lang="scss">
  .index {
    background: #999;
    color: #333;
    font-size: 16px;
  }
</style>
<script>
  // 需要import才能使用 mapState
  import {mapState} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed: mapState({
      count: state => state.count
    }),

    methods:{
      increment(){
        this.$store.commit('increment');
      },
      decrement(){
        this.$store.commit('decrement');
      }
    }
  };
</script>
