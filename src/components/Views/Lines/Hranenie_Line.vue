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
						<v-progress-linear class="mt1" :color=this.col(0)[0] :height="LINEHEIGHT - 2" :value=+this.per(0)>
							{{ per(0) }}
						</v-progress-linear>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-progress-linear class="mt1" :color=this.col(1)[0] :height="LINEHEIGHT - 2" :value=+this.per(1)>
							{{ per(1) }}
						</v-progress-linear>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-progress-linear class="mt1" :color=this.col(2)[0] :height="LINEHEIGHT - 2" :value=+this.per(2)>
							{{ per(2) }}
						</v-progress-linear>
					</v-row>
				</v-col>

				<v-col cols="1">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz(0) }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 1">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz(1) }}
						</v-col>
					</v-row>
					<v-row no-gutters v-if="rows > 2">
						<v-col cols="12" class="cellstandart bordered" :style="lheight">
							{{ raz(2) }}
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
		},
		per(id) {
			return this.percent(this.hranenie.category[id].proect, this.hranenie.category[id].put)
		},	
		col(id) {
			return this.getColor(this.per(id))
		},		
		raz(id) {
			return (this.hranenie.category[id].proect - this.hranenie.category[id].put).toFixed(2)
		},			
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
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mt1 {
	margin: 1px 0;
}
</style>
