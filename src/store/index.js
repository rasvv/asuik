import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 30,
    lineheight: 15,
    creation: require("@/db/Creation.json")
  },
  getters: {
		LINEHEIGHT: state => {
			return (state.lineheight * 2.17).toFixed(0)
		},
		HHEIGHT3: state => {
			return {
				height: `${state.mainlineheight * 3}px`
			}
		},
		HHEIGHT2: state => {
			return {
				height: `${state.mainlineheight * 2}px`
			}
		},
		HHEIGHT1: state => {
			return {
				height: `${state.mainlineheight}px`
			}
		},    
  },
  mutations: {},
  actions: {},
});