import Vue from 'vue';
import Vuex from 'vuex';

import creation from '@/db/creation.json';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 24,
    lineheight: 16,
    step1: 60,
    step2: 80,
    activeсeh: 7,
    creation: creation,
  },
  getters: {
		LINEHEIGHT: state => {
			return (state.lineheight * 2).toFixed(0)
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
		CREATION: state => {
			return state.creation
		},
		ACTIVECEH: state => {
			return state.activeсeh
		},    
    STEP1: state => {
			return state.step1
		},
    STEP2: state => {
			return state.step2
		},
  },
  mutations: {},
  actions: {},
});
