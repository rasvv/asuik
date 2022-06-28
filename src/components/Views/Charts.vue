<template>
	<div>
		<h3>Статистика образования РАО в {{ CREATION[ACTIVECEH - 1].name }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<Cehs title='ЦЕХ' />
				</v-col>
				<v-col cols="10" :style="HHEIGHT3">
					<v-row>
						<v-col cols="6" class="pa-10 ma-0">
							<LineChart :height="300" />
						</v-col>
						<v-col cols="6" class="pa-10 ma-0">
							<BarChart :height="300" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6" class="pa-10 ma-0">
							<PieChart :height="300" />
						</v-col>
						<v-col cols="6" class="pa-10 ma-0">
							<PolarChart :height="300" />
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import LineChart from '@/components/Views/Charts/LineChart.vue';
import BarChart from '@/components/Views/Charts/BarChart.vue';
import PieChart from '@/components/Views/Charts/PieChart.vue';
import PolarChart from '@/components/Views/Charts/PolarChart.vue';
import Cehs from './Cehs.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'line-chart-summary',
	components: {
		LineChart,
		BarChart,
		PieChart,
		PolarChart,
		Cehs
	},
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATION', 'ACTIVECEH'
		]),
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
