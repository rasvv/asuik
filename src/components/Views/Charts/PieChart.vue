<template>
	<Pie :chart-options="chartOptions" :chart-data="pieData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
		:plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'
import { mapGetters } from 'vuex'

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
	name: 'PieChart',
	components: {
		Pie
	},
	props: {
		chartId: {
			type: String,
			default: 'pie-chart'
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
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false
			}
		}
	},
	computed: {
		...mapGetters([
			'PIECHARTDATA', 'CREATION', 'ACTIVECEH'
		]),
		pieData() {
			let arr = []

			arr.push(this.CREATION[this.ACTIVECEH - 1].nao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].sao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].vao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].mrao)

			this.pieDataArr(arr)
			return this.PIECHARTDATA
		}
	},
	methods: {
		pieDataArr(arr) {
			this.PIECHARTDATA.datasets[0].data = arr
		}
	},
	mounted() {

	}
}
</script>
