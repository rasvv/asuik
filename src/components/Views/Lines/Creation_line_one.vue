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
							<v-progress-linear class="mbb" :color=this.colnao[0] :height="lheight - 2" :value=+this.colnao[1]>
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
							<v-progress-linear class="mbb" :color=this.colsvao[0] :height="lineheight - 2"
								:value=+this.colsvao[1]>
								{{ persvao }}
							</v-progress-linear>
						</v-col>
						<v-col cols="1" class="bordered" :style="lheight">
							{{ creation.mrao }}
						</v-col>
						<v-col cols="4" class="pa-0 ma-0 bordered" :style="lheight">
							<v-progress-linear class="mbb" :color=this.colsum[0] :height="lineheight - 2"
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
export default {
	name: 'creation-line-one',
	props: ['creation', 'lineheight'],
	data() {
		return {
			lheight: {
				height: `${this.lineheight}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		}
	},
	methods: {
		percent(val1, val2) {
			return ((100 * val2 / val1).toFixed(2))
		}
	},
	computed: {
		pernao() {
			return +this.percent(this.creation.normnao, this.creation.nao)
		},
		colnao() {
			if (+this.pernao < 60) { return ["green", +this.pernao] }
			else if (+this.pernao < 80) { return ["yellow", +this.pernao] }
			else { return ["red", (+this.pernao > 100) ? 100 : +this.pernao] }
		},
		persvao() {
			const svao = this.creation.sao + this.creation.vao
			if (svao === 0) return 0
			else return +this.percent(this.creation.normsvao, svao)
		},
		colsvao() {
			if (+this.persvao < 60) { return ["green", +this.persvao] }
			else if (+this.persvao < 80) { return ["yellow", +this.persvao] }
			else { return ["red", (+this.persvao > 100) ? 100 : +this.persvao] }
		},
		persum() {
			return +this.percent(this.creation.normnao + this.creation.normsvao,
				this.creation.nao + this.creation.sao + this.creation.vao + this.creation.mrao)
		},
		colsum() {
			if (+this.persum < 60) { return ["green", this.persum] }
			else if (+this.persum < 80) { return ["yellow", this.persum] }
			else { return ["red", (+this.persum > 100) ? 100 : +this.persum] }
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
