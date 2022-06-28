import Vue from 'vue';
import Vuex from 'vuex';

import creation from '@/db/Creation.json';
import hranenie from '@/db/Hranenie.json';
import hranenieopros from '@/db/Hranenie_opros.json';
import creationPerMonth from "@/db/CreationPerMonth.json";
import lineChartData from "@/db/LineChartData.json";
import pieChartData from "@/db/PieChartData.json";
import polarChartData from "@/db/PolarChartData.json";
import barChartData from "@/db/BarChartData.json";
import contstates from "@/db/Contstates.json";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 30,
    lineheight: 32,
    step1: 60,
    step2: 80,
    activeсeh: 7,

    creation: creation,
    hranenie: hranenie,
    hranenieopros: hranenieopros,
    lineChartData: lineChartData,
    pieChartData: pieChartData,
    polarChartData: polarChartData,
    barChartData: barChartData,
    creationPerMonth: creationPerMonth,
    contstates: contstates,
  },
  getters: {
		LINEHEIGHT: state => {
			return state.lineheight
		},
		MAINLINEHEIGHT: state => {
			return state.mainlineheight
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
		HRANENIEOPROS: state => {
			return state.hranenieopros
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
		CONTSTATES: state => {
			return state.contstates
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
		setMainLineHeight (state, payload) {
			state.mainlineheight = payload
		},
		setLineHeight (state, payload) {
			state.lineheight = payload
		},
	},
	actions: {
		updateActiveCeh ({ commit }, activeсeh) {
			return commit('setActiveCeh', activeсeh)
		},
		updateMainLineHeight ({ commit }, mainlineheight) {
			return commit('setMainLineHeight', mainlineheight)
		},
		updateLineHeight ({ commit }, lineheight) {
			return commit('setLineHeight', lineheight)
		},
	},
});
