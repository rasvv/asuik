<template>
	<div>
		<div class="table__line">
			<v-row no-gutters>
				<v-col cols="2" class="cellstandart bordered" :style="lheight1">
					{{ hranenie.name }}
				</v-col>
				<v-col cols="1" class="cellstandart bordered">
					{{ hranenie.category[0].cat }}
				</v-col>
				<v-col cols="2" class="cellstandart bordered">
					{{ hranenie.proectvalue }}
				</v-col>
				<v-col cols="2" class="cellstandart bordered">
					{{ hranenie.category[0].proect }}
				</v-col>
				<v-col cols="1" class="cellstandart bordered">
					{{ hranenie.category[0].put }}
				</v-col>
				<v-col cols="3" class="cellstandart bordered">
					<v-progress-linear class="mbb" :color=this.col1 :height="lineheight - 2" :value=this.per1>
						<v-col cols="12">
							{{ per1 }}
						</v-col>
					</v-progress-linear>
				</v-col>
				<v-col cols="1" class="cellstandart bordered">
					{{ raz1 }}
				</v-col>

			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'line-three',
	props: ['hranenie'],
	methods: {
		percent(val1, val2) {
			return ((100 * val2 / val1).toFixed(2))
		}
	},
	computed: {
		per1() {
			return this.percent(this.hranenie.category[0].proect, this.hranenie.category[0].put)
		},
		col1() {
			if (this.per1 < 60) { return "green" }
			else if (this.per1 < 80) { return "yellow" }
			else { return "red" }
		},
		raz1() {
			return (this.hranenie.category[0].proect - this.hranenie.category[0].put).toFixed(2)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
