import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: `http://localhost:3000`
})

var store = new Vuex.Store({
  state: {
    articles: ''
  },
  mutations: {
    setArticle (state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getArticles ({commit}) {
      http.get('/articles')
      .then(response => {
        commit('setArticles', response.data)
      })
      .catch(err => console.log(err))
    }
  }
})

export default store