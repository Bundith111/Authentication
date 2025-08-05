import axios from 'axios'
import { setToken, setUser } from '@/plugins/authentication'

const state = {
  user: null,
  token: null,
}

const getters = {
  isAuthenticated: (state) => !!state.token,
  getUser: (state) => state.user,
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  LOGOUT(state) {
    state.user = null
    state.token = null
  },
}

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      })

      const { user, authorization } = response.data

      if (user && authorization?.access_token) {
        commit('SET_USER', user)
        commit('SET_TOKEN', authorization)
        setUser(user)
        setToken(authorization)
        return response
      } else {
        throw new Error('Invalid login response')
      }
    } catch (error) {
      throw error
    }
  },

  logout({ commit }) {
    commit('LOGOUT')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
