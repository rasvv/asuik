<template>
	<v-app-bar
		app
		flat
		class="d-flex justify-center dark primary white--text"
	>
		<v-row class="d-flex justify-center mt-2">
			<v-col cols="1" class="px-2">
				<v-text-field label="Заголовок" v-model="mainLineHeight" class="px-4" hide-details single-line type="number"
					@click="changeMainLineHeight(mainLineHeight)">
				</v-text-field>
			</v-col>
			<v-col cols="10" class="cellstandart">
				<v-btn color="primary" depressed :ripple="false" to="/Hranenie">Хранение</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/HranenieOpros">Опрос ПХ</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/Creation">Образование</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/CreationSummary">Образование по цехам</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/LineChartSummary">LineChart</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/PieChartSummary">PieChart</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/PolarChartSummary">PolarChart</v-btn>	
				<v-btn color="primary" depressed :ripple="false" to="/BarChartSummary">BarChart</v-btn>	
			</v-col>

			<v-col cols="1">
				<v-text-field label="Строка" hint="Строка" v-model="lineHeight" class="px-4" hide-details single-line
					type="number" @click="changeLineHeight(lineHeight)">
				</v-text-field>
			</v-col>
		</v-row>
	</v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'App',

	data() {
		return {
			form: 'Creation',
			lineHeight: this.LINEHEIGHT,
			mainLineHeight: this.MAINLINEHEIGHT
		}
	},
	methods: {
		...mapActions([
			'updateLineHeight', 'updateMainLineHeight'
		]),

		changeLineHeight(n) {
			console.log(n);
			this.updateLineHeight(n)
		},
		changeMainLineHeight(n) {
			console.log(n);
			this.updateMainLineHeight(n)
		},


	},
	computed: {
		...mapGetters([
			'LINEHEIGHT', 'MAINLINEHEIGHT'
		]),
	},
	mounted() {
		this.lineHeight = this.LINEHEIGHT
		this.mainLineHeight = this.MAINLINEHEIGHT
	}
};
</script>

<style>

</style>