<template>
	<div>
		<h3>Статистика образования РАО в {{ CREATION[ACTIVECEH - 1].name }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart table__header captionstyle bordered" :style="HHEIGHT3">
							Цех
						</v-col>
					</v-row>
					<v-row no-gutters v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]">
						<v-col cols="12" class="cellstandart bordered"
							:style="n === ACTIVECEH ? [active, HHEIGHT1] : HHEIGHT1">
							{{ CREATION[n - 1].name }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="10" :style="HHEIGHT3">
					<v-row>
						<v-col cols="12" class="pa-10 ma-0">
							<ChartLine />
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import ChartLine from './VueChartJS.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'chart-summary',
	components: {
		ChartLine
	},
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATION', 'ACTIVECEH'
		]),
		active() {
			return {
				backgroundColor: "#a1d8f5",
				fontWeight: "bold"
			}
		},
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
