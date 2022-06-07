<template>
	<Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
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
			chartData: {
				labels: ['НАО', 'САО', 'ВАО', 'МРАО'],
				datasets: [
					{
						backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
						data: this.barDataArr
					}
				]
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false
			}
		}
	},
	computed: {
		...mapGetters([
			'CREATION', 'ACTIVECEH'
		]),
		barData() {
			let arr = []
			console.log(this.CREATION);
			console.log(this.ACTIVECEH);

			arr.push(this.CREATION[this.ACTIVECEH - 1].nao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].sao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].vao)
			arr.push(this.CREATION[this.ACTIVECEH - 1].mrao)
			console.log(arr);
			return arr
		}
	},
	methods: {
		barDataArr() {
			this.chartData.datasets[0].data = this.barData
		}
	},
	mounted() {
		this.barDataArr()
	}
}
</script>

	// data() {
	// 	return {
	// 		pieChartData: {
	// 			labels: ['НАО', 'САО', 'ВАО', 'МРАО'],
	// 			datasets: [
	// 				{
	// 					label: 'Data One',
	// 					backgroundColor: ['#1E9600', '#99C802', '#FFF200', '#F89403'],
	// 					data: [40, 20, 12, 5]
	// 				}
	// 			],
	// 			hoverOffset: 4
	// 		},

	// 		pieChartOptions: {
	// 			responsive: true,
	// 			maintainAspectRatio: false
	// 		}
	// 	}
	// },
	// computed: {
	// 	...mapGetters([
	// 		'CREATION', 'ACTIVECEH'
	// 	]),

	// },
	// methods: {
	// 	barData() {
	// 		let arr = []
	// 		console.log(this.CREATION);
	// 		console.log(this.ACTIVECEH);

	// 		arr.push(this.CREATION[this.ACTIVECEH].nao)
	// 		arr.push(this.CREATION[this.ACTIVECEH].sao)
	// 		arr.push(this.CREATION[this.ACTIVECEH].vao)
	// 		arr.push(this.CREATION[this.ACTIVECEH].mrao)
	// 		console.log(arr);
	// 		return arr
	// 	}
	// }
