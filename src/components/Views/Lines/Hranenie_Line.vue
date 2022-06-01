<template>
	<div>
		<div class="table__line">
			<v-row no-gutters>
				<v-col cols="2" class="cellstandart bordered" :style="bheight">
					{{ hranenie.name }}
				</v-col>
				<v-col cols="1">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[0].cat }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[1].cat }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[2].cat }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="2" class="cellstandart bordered">
					{{ hranenie.proectvalue }}
				</v-col>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[0].proect }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[1].proect }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[2].proect }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[0].put }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[1].put }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ hranenie.category[2].put }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="3">
					<v-row no-gutters>
						<v-progress-linear class="mt1" :color=this.col1[0] :height="LINEHEIGHT - 2" :value=+this.per1>
							{{ per1 }}
						</v-progress-linear>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-progress-linear class="mt1" :color=this.col2[0] :height="LINEHEIGHT - 2" :value=+this.per2>
							{{ per2 }}
						</v-progress-linear>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-progress-linear class="mt1" :color=this.col3[0] :height="LINEHEIGHT - 2" :value=+this.per3>
							{{ per3 }}
						</v-progress-linear>
					</v-row>
				</v-col>

				<v-col cols="1">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz1 }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz2 }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz3 }}
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'hranenie-line',
	props: ['hranenie', "rows"],
	methods: {
		percent(val1, val2) {
			return ((100 * val2 / val1).toFixed(2))
		},
		getColor(val) {
			if (+val < this.STEP1) { return ["green", +val] }
			else if (+val < this.STEP2) { return ["yellow", +val] }
			else { return ["red", (+val > 100) ? 100 : +val] }
		},
		getBHeight() {
			return `${this.LINEHEIGHT * this.rows}px`
		}
	},
	computed: {
		...mapGetters([
			'STEP1', 'STEP2', 'LINEHEIGHT'
		]),
		lheight() {
			return {
				height: `${this.LINEHEIGHT}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
		bheight() {
			return {
				height: `${this.LINEHEIGHT * this.rows}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}
		},
		per1() {
			return this.percent(this.hranenie.category[0].proect, this.hranenie.category[0].put)
		},
		per2() {
			return this.percent(this.hranenie.category[1].proect, this.hranenie.category[1].put)
		},
		per3() {
			return this.percent(this.hranenie.category[2].proect, this.hranenie.category[2].put)
		},
		col1() {
			return this.getColor(+this.per1)
		},
		col2() {
			return this.getColor(+this.per2)
		},
		col3() {
			return this.getColor(+this.per3)
		},
		raz1() {
			return (this.hranenie.category[0].proect - this.hranenie.category[0].put).toFixed(2)
		},
		raz2() {
			return (this.hranenie.category[1].proect - this.hranenie.category[1].put).toFixed(2)
		},
		raz3() {
			return (this.hranenie.category[2].proect - this.hranenie.category[2].put).toFixed(2)
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mt1 {
	margin: 1px 0;
}
</style>
