import Vuex from 'vuex'
import files from './files'

const createStore = () => {
  return new Vuex.Store({
    modules: {
        files,
    }
  })
}

export default createStore
