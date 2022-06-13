<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12" class="cellstandart table__header captionstyle bordered" :style="HHEIGHT2">
				{{ title }}
			</v-col>
		</v-row>
		<v-row no-gutters v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]">
			<v-btn style="width: 100%" :color="n === ACTIVECEH ? 'primary' : 'normal'" :style="lheight" @click="onClick(n)">
				{{ CREATION[n - 1].name }}
			</v-btn>
		</v-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'cehs-column',
	props: ['title'],
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
		lheight() {
			return {
				height: `${this.LINEHEIGHT}px`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
	},
	methods: {
		...mapActions([
			'updateActiveCeh'
		]),
		onClick(n) {
			this.updateActiveCeh(n)
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
