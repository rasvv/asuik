<template>
	<div>
		<div class="table__line">
			<v-row no-gutters>
				<v-col cols="1" class="cellstandart captionstyle bordered" :style="lheight">
					{{ creation.name }}
				</v-col>
				<v-col cols="2">
					<v-row class="cellstandart">
						<v-col cols="6" class="bordered" :style="lheight">
							{{ creation.normnao }}
						</v-col>
						<v-col cols="6" class=" bordered" :style="lheight">
							{{ creation.normsvao }}
						</v-col>
					</v-row>
				</v-col>

				<v-col cols="9">
					<v-row class="cellstandart">
						<v-col cols="1" class="bordered" :style="lheight">
							{{ creation.nao }}
						</v-col>
						<v-col cols="2" class="pa-0 ma-0 bordered" :style="lheight">
							<v-progress-linear class="mbb" :color=this.colnao[0] :height="LINEHEIGHT - 2" :value=+this.colnao[1]>
								{{ pernao }}
							</v-progress-linear>
						</v-col>
						<v-col cols="1" class="bordered" :style="lheight">
							{{ creation.sao }}
						</v-col>
						<v-col cols="1" class="bordered" :style="lheight">
							{{ creation.vao }}
						</v-col>
						<v-col cols="2" class="pa-0 ma-0 bordered" :style="lheight">
							<v-progress-linear class="mbb" :color=this.colsvao[0] :height="LINEHEIGHT - 2"
								:value=+this.colsvao[1]>
								{{ persvao }}
							</v-progress-linear>
						</v-col>
						<v-col cols="1" class="bordered" :style="lheight">
							{{ creation.mrao }}
						</v-col>
						<v-col cols="4" class="pa-0 ma-0 bordered" :style="lheight">
							<v-progress-linear class="mbb" :color=this.colsum[0] :height="LINEHEIGHT - 2"
								:value=this.colsum[1]>
								{{ persum }}
							</v-progress-linear>
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
	name: 'creation-line-one',
	props: ['creation'],
	data() {
		return {
		}
	},
	methods: {
		percent(val1, val2) {
			return ((100 * val2 / val1).toFixed(2))
		},
		getColor(val) {
			if (+val < this.STEP1) { return ["green", +val] }
			else if (+val < this.STEP2) { return ["yellow", +val] }
			else { return ["red", (+val > 100) ? 100 : +val] }
		}		
	},
	computed: {
		lheight() {return {
			height: `${this.LINEHEIGHT}px`,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}},
		...mapGetters([
			'STEP1', 'STEP2', 'LINEHEIGHT', 'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATION', 'ACTIVECEH'
		]),			
		pernao() {
			return +this.percent(this.creation.normnao, this.creation.nao)
		},
		colnao() {
			return this.getColor(+this.pernao)
		},
		persvao() {
			const svao = this.creation.sao + this.creation.vao
			if (svao === 0) return 0
			else return +this.percent(this.creation.normsvao, svao)
		},
		colsvao() {
			return this.getColor(+this.persvao)
		},
		persum() {
			return +this.percent(this.creation.normnao + this.creation.normsvao,
				this.creation.nao + this.creation.sao + this.creation.vao + this.creation.mrao)
		},
		colsum() {
			return this.getColor(+this.persum)
		},
		active() {
			return {
				backgroundColor: "#a1d8f5",
				fontWeight: "bold"
			}
		},		
	},
}
</script>

<style>
</style>
