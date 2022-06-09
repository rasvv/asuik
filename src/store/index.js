import Vue from 'vue';
import Vuex from 'vuex';

import creation from '@/db/creation.json';
import hranenie from '@/db/hranenie.json';
import creationPerMonth from "@/db/CreationPerMonth.json";
import lineChartData from "@/db/LineChartData.json";
import pieChartData from "@/db/PieChartData.json";
import polarChartData from "@/db/PolarChartData.json";
import barChartData from "@/db/BarChartData.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 24,
    lineheight: 16,
    step1: 60,
    step2: 80,
    activeсeh: 7,

    creation: creation,
    hranenie: hranenie,
    lineChartData: lineChartData,
    pieChartData: pieChartData,
    polarChartData: polarChartData,
    barChartData: barChartData,
    creationPerMonth: creationPerMonth,
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
		HRANENIE: state => {
			return state.hranenie
		},
		LINECHARTDATA: state => {
			return state.lineChartData
		},
		PIECHARTDATA: state => {
			return state.pieChartData
		},
		POLARCHARTDATA: state => {
			return state.polarChartData
		},
		BARCHARTDATA: state => {
			return state.barChartData
		},
		CREATIONPERMONTH: state => {
			return state.creationPerMonth
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
		setActiveCeh (state, payload) {
			state.activeсeh = payload
		},
	},
	actions: {
		updateActiveCeh ({ commit }, activeсeh) {
			return commit('setActiveCeh', activeсeh)
		}
	},
});
