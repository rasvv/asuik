<template>
	<div>
		<h3>Статистика образования РАО в {{ CREATION[ACTIVECEH - 1].name }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart table__header captionstyle bordered"
							:style="HHEIGHT3">
							Цех
						</v-col>
					</v-row>
					<v-row no-gutters v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]">
						<v-col cols="12" class="cellstandart bordered"
							:style="n === ACTIVECEH ? [active, HHEIGHT1] : HHEIGHT1">
							{{ CREATION[n - 1].name }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="10" :style="HHEIGHT3">
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Год"/>
							<Creation_line_one :creation="CREATION[CREATION.length - 1]" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Месяц"/>
							<Creation_line_one v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]" />
						</v-col>
					</v-row>

				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import Creation_line_one from './Lines/Creation_line_one.vue';
import Creation_Header from './Headers/CreationHeader.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'creation-summary',
	components: {
		Creation_line_one,
		Creation_Header,
	},
	data() {
		return {
		};
	},
	methods: {
	},
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
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
