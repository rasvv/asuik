import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

import creation from '@/db/creation.json';
// import creationceh from '@/db/creationceh.json';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 24,
    lineheight: 16,
    step1: 60,
    step2: 80,
    activeсeh: 7,
    creation: creation,
    // creationceh: creationceh
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
  mutations: {
    // SET_CREATION: (state, creation) => { 
    //   state.creation = creation;
    // }
  },
  actions: {},
});

// const setCreationToStore = () => {

//   axios
//   .get("/db/creation.json")
//   .then(response => {
//     console.log(response);
//       store.commit('SET_CREATION', response.data.creation);
//   })   
// }

// setCreationToStore();