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
					<v-tooltip top>
						<template v-slot:activator="{ on, attrs }">
							<v-img class="rounded-lg"
								:src="require(`@/${getImg(hranenieopros[n-1].state)}`)"
								position="center center"
								:max-height=getSize()
								:max-width=getSize()
								alt="logo"
								contain
								v-bind="attrs"
								v-on="on"								
							> </v-img>					
						</template>
						<span>{{getDesc(hranenieopros[n-1].state)}}</span>
					</v-tooltip>
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
		getSize() {
			return this.LINEHEIGHT - 4
		},
		getDesc(state) {
			return this.CONTSTATES.find(item => item.state === state).description
		},
		getImg(state) {
			return this.CONTSTATES.find(item => item.state === state).img
		}
	},
	computed: {
		...mapGetters([
			'STEP1', 'STEP2', 'LINEHEIGHT', 'HHEIGHT1', 'CONTSTATES'
		]),
		lheight() {
			return {
				height: `${this.LINEHEIGHT}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
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
