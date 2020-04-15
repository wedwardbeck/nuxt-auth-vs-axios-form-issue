import Vue from 'vue'
import Vuex from 'vuex'
import axios from "~/plugins/axios";
/* eslint-disable */

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {

    async login ({ commit }, creds) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        await this.$axios.$post('login/access-token', creds, config)
        const data = await this.$axios.$get('users/me')
        commit('SET_USER', data)
    },
    logout({ commit }) {
      commit('SET_USER', null)
      this.$axios.$post('/auth/logout/')
    }
  }
});

export default store
