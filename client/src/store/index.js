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
    load: false,
  },
  mutations: {
    SET_USER(state, value) {
      state.user = value;
    },
    SET_LOAD(state, value) {
      state.load = value;
    },
    READ_ARTICLE(state, id) {
      state.user.complite.articles.push(id);
    },
    TEST_COMPLITE(state, result) {
      state.user.complite.tests.push(result);
    },
  },
  actions: {
    setUser({ commit }, value) {
      commit('SET_USER', value);
    },
    setLoad({ commit }, value) {
      commit('SET_LOAD', value);
    },
    readArticle({ commit }, id) {
      commit('READ_ARTICLE', id);
    },
    testComplite({ commit }, result) {
      commit('TEST_COMPLITE', result);
    },
  },
  modules: {
  },
});
