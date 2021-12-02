import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    articles: [],
    tests: [],
    users: [],
    project: null,
    article: null,
    test: null,
    user: null,
  },
  mutations: {
    SET_USER(state, value) {
      state.user = value;
    },
  },
  actions: {
    setUser({ commit }, value) {
      commit('SET_USER', value);
    },
  },
  modules: {
  },
});
