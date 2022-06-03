<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12" class="cellstandart table__header captionstyle bordered" :style="HHEIGHT3">
				{{ title }}
			</v-col>
		</v-row>
		<v-row no-gutters v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]">
			<v-col cols="12" class="cellstandart bordered" :style="n === ACTIVECEH ? [active, LINEHEIGHT] : LINEHEIGHT"
				@click="onClick(n)">
				{{ CREATION[n - 1].name }}
			</v-col>
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
