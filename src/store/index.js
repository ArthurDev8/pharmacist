import Vue from 'vue'
import Vuex from 'vuex'
import pharmacist from "./pharmacist"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pharmacist
  }
})
