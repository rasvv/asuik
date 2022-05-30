import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    mainlineheight: 30,
    lineheight: 20,
    step1: 60,
    step2: 80,
    creation: [{
      "id": 1,
      "name": "ОДМиТК",
      "normnao": 10,
      "normsvao": 1,
      "nao": 3.58,
      "sao": 0,
      "vao": 0,
      "mrao": 1.8
    },
    {
      "id": 2,
      "name": "ОИКТ",
      "normnao": 1,
      "normsvao": 0,
      "nao": 0.15,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 3,
      "name": "ОМ",
      "normnao": 1,
      "normsvao": 0,
      "nao": 0,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 4,
      "name": "ОРБ",
      "normnao": 3,
      "normsvao": 0,
      "nao": 2.78,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 4,
      "name": "ОЯБиН",
      "normnao": 5,
      "normsvao": 1,
      "nao": 1.44,
      "sao": 0.18,
      "vao": 0,
      "mrao": 0.55
    },
    {
      "id": 5,
      "name": "РЦ-1",
      "normnao": 174,
      "normsvao": 104,
      "nao": 158.61,
      "sao": 31.17,
      "vao": 16.51,
      "mrao": 16.59
    },
    {
      "id": 6,
      "name": "РЦ-2",
      "normnao": 154,
      "normsvao": 76,
      "nao": 95.29,
      "sao": 8.59,
      "vao": 4.1,
      "mrao": 113.9
    },
    {
      "id": 7,
      "name": "СБ",
      "normnao": 1,
      "normsvao": 0,
      "nao": 0,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 8,
      "name": "ТАИ",
      "normnao": 20,
      "normsvao": 8,
      "nao": 13.15,
      "sao": 0,
      "vao": 0,
      "mrao": 4.83
    },
    {
      "id": 9,
      "name": "ТЦ",
      "normnao": 440,
      "normsvao": 0,
      "nao": 441.44,
      "sao": 0,
      "vao": 0,
      "mrao": 19.2
    },
    {
      "id": 10,
      "name": "ХЦ",
      "normnao": 50,
      "normsvao": 0,
      "nao": 36.15,
      "sao": 0,
      "vao": 0,
      "mrao": 21.4
    },
    {
      "id": 11,
      "name": "ЦВ",
      "normnao": 100,
      "normsvao": 30,
      "nao": 35.13,
      "sao": 15,
      "vao": 0,
      "mrao": 24.11
    },
    {
      "id": 12,
      "name": "ЦД",
      "normnao": 95,
      "normsvao": 2.75,
      "nao": 67.65,
      "sao": 2.22,
      "vao": 0.06,
      "mrao": 0
    },
    {
      "id": 13,
      "name": "ЦОРО",
      "normnao": 5,
      "normsvao": 0,
      "nao": 0.36,
      "sao": 0,
      "vao": 0,
      "mrao": 137.11
    },
    {
      "id": 14,
      "name": "ЦОС",
      "normnao": 1,
      "normsvao": 0,
      "nao": 0,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 15,
      "name": "ЦХООЯТ",
      "normnao": 17,
      "normsvao": 16,
      "nao": 2.14,
      "sao": 0.54,
      "vao": 0,
      "mrao": 0.2
    },
    {
      "id": 16,
      "name": "ЦЦР",
      "normnao": 15,
      "normsvao": 0,
      "nao": 10.74,
      "sao": 0,
      "vao": 0,
      "mrao": 1.8
    },
    {
      "id": 17,
      "name": "ЭЦ",
      "normnao": 20,
      "normsvao": 0,
      "nao": 4.38,
      "sao": 0,
      "vao": 0,
      "mrao": 0
    },
    {
      "id": 100,
      "name": "ИТОГО",
      "normnao": 1112,
      "normsvao": 238.75,
      "nao": 872.94,
      "sao": 57.7,
      "vao": 20.67,
      "mrao": 341.5
    }
  ]
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
		creation: state => {
			return state.creation
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