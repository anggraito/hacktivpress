import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: ''
  },
  mutations: {
    setArticle (state, payload) {
      this.articles = payload
    }
  },
  actions: {
    getArticles () {
      return this.
    }
  }
})

export default store