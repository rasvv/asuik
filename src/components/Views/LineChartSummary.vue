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
						<v-col cols="12" class="pa-10 ma-0">
							<LineChart />
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import LineChart from '@/components/Views/Charts/LineChart.vue';
import Cehs from './Cehs.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'line-chart-summary',
	components: {
		LineChart,
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
