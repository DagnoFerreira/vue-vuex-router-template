/**
 * Created by superman on 2016/12/2.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';
import API from './api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: []
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    user(state, list){
      state.user = list;
    }
  },

  actions: {
    user(context, username){
      axios.get(API.users + username).then(function (data) {
        context.commit('user', data.data);
      })
    }
  }
});