import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    addData (state, payload) {
      const filteredData = {}
      for(let i = 0; i < payload.data.length; i++) {
        filteredData[i] = payload.data[i]
      }
      state.data = filteredData
    }
  },
  actions: {
    fetchData ({ commit }) {
      console.log('fetching data')
      return axios('https://603b9c14f1d6aa0017a1220b.mockapi.io/something123/data', {
        method: 'GET'
      })
        .then((data) => {
          commit('addData', data)
        })
    }
  },
  getters: {
    data(state) {
      return state.data
    }
  }
})
