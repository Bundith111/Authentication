// Import createStore function from vuex
import { createStore, createLogger } from 'vuex'

// Import user modules to register within createStore to use within the App
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    company: "PPDS"
  },
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? 
    [
      createLogger()
    ] : 
    [
      
    ]
})
