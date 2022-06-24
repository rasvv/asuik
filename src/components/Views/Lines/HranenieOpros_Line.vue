<template>
	<div>
		<div class="table__subline bordered" :style="HHEIGHT1" no-gutters>
			{{ name }}
		</div>		
		<div class="table__line">
			<v-row  v-for="n in hranenieopros.length" :key="n" no-gutters >
				<v-col cols="2" class="cellstandart bordered" :style="lheight">
					{{ hranenieopros[n-1].pass }}
				</v-col>
				<v-col cols="4" class="d-flex">
					<v-col cols="6" class="cellstandart bordered" :style="lheight">
						{{ hranenieopros[n-1].kon_zav }}
					</v-col>
					<v-col cols="6" class="cellstandart bordered" :style="lheight">
						{{ hranenieopros[n-1].kon_reg }}
					</v-col>
				</v-col>
				<v-col cols="4" class="d-flex">
					<v-col cols="4" class="cellstandart bordered" :style="lheight">
						{{ hranenieopros[n-1].section }}
					</v-col>
					<v-col cols="4" class="cellstandart bordered" :style="lheight">
						{{ hranenieopros[n-1].yarus }}
					</v-col>
					<v-col cols="4" class="cellstandart bordered" :style="lheight">
						{{ hranenieopros[n-1].cell }}
					</v-col>
				</v-col>				
				<v-col cols="2" class="cellstandart bordered">
					<v-img class="rounded-lg"
						:src="require(`@/assets/icons/${hranenieopros[n-1].state}.jpg`)"
						position="center center"
						:max-height=getSize()
						:max-width=getSize()
						alt="logo"
						contain
					> </v-img>					
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'hranenie-opros-line',
	props: ['hranenieopros', 'name'],
	methods: {
		percent(val1, val2) {
			return ((100 * val2 / val1).toFixed(2))
		},
		getPath() {
			return ("hranenieopros[1].state")
		},
		getColor(val) {
			if (+val < this.STEP1) { return ["green", +val] }
			else if (+val < this.STEP2) { return ["yellow", +val] }
			else { return ["red", (+val > 100) ? 100 : +val] }
		},
		getSize() {
			return this.LINEHEIGHT - 4
		}
	},
	computed: {
		...mapGetters([
			'STEP1', 'STEP2', 'LINEHEIGHT', 'HHEIGHT1'
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
