<template>
	<div>
		<div class="table__line">
			<v-row no-gutters>
				<v-col cols="2" class="cellstandart bordered">
					{{ hranenie.name }}
				</v-col>
				<v-col cols="1">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[0].cat }}
						</v-col>
					</v-row>
					<v-row class="cellstandart header header1" no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[1].cat }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="2" class="cellstandart bordered">
					{{ hranenie.proectvalue }}
				</v-col>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[0].proect }}
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[1].proect }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[0].put }}
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ hranenie.category[1].put }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-row no-gutters>
						<v-progress-linear class="mbb" color="red" height="38" :value=this.per1>
							<v-col cols="12" class="cellstandart bordered">
								{{ per1 }}
							</v-col>
						</v-progress-linear>

					</v-row>
					<v-row no-gutters>
						<v-progress-linear class="mbb" color="red" height="38" :value=this.per1>
							<v-col cols="12" class="cellstandart bordered">
								{{ per2 }}
							</v-col>
						</v-progress-linear>
					</v-row>
				</v-col>

				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ raz1 }}
						</v-col>
					</v-row>
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered">
							{{ raz2 }}
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'line-two',
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
		per2() {
			return this.percent(this.hranenie.category[1].proect, this.hranenie.category[1].put)
		},
		raz1() {
			return (this.hranenie.category[0].proect - this.hranenie.category[0].put).toFixed(2)
		},
		raz2() {
			return (this.hranenie.category[1].proect - this.hranenie.category[1].put).toFixed(2)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
