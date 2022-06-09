<template>
	<PolarArea :chart-options="chartOptions" :chart-data="polarData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
		:plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { mapGetters } from 'vuex'

import { PolarArea } from 'vue-chartjs/legacy'

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	RadialLinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)

export default {
	name: 'PolarAreaChart',
	components: {
		PolarArea
	},
	props: {
		chartId: {
			type: String,
			default: 'polar-chart'
		},
		datasetIdKey: {
			type: String,
			default: 'label'
		},
		width: {
			type: Number,
			default: 400
		},
		height: {
			type: Number,
			default: 400
		},
		cssClasses: {
			default: '',
			type: String
		},
		styles: {
			type: Object,
			default: () => { }
		},
		plugins: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			chartData: {

			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false
			}
		}
	},
	computed: {
		...mapGetters([
			'POLARCHARTDATA', 'CREATION', 'ACTIVECEH'
		]),
		polarData() {
			let arr = []
			let nao = (this.CREATION[this.ACTIVECEH - 1].normnao / 2).toFixed(2)
			arr.push(nao)
			arr.push(nao)
			let svnao = (this.CREATION[this.ACTIVECEH - 1].normsvao / 2).toFixed(2)
			arr.push(svnao)
			arr.push(svnao)
			this.polarDataArr(0, arr)

			arr = []

			arr.push(this.CREATION[this.ACTIVECEH - 1].nao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].sao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].vao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].mrao)
			this.polarDataArr(1, arr)
			return this.POLARCHARTDATA
		}
	},
	methods: {
		polarDataArr(i, arr) {
			this.POLARCHARTDATA.datasets[i].data = arr
		}
	},
	mounted() {

	}
}
</script>


