<template>
	<div>
		<h3>Статистика образования РАО в {{ creationceh[activeCeh - 1].name }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="d-flex justify-center align-center table__header captionstyle bordered"
							:style="hheight3">
							Цех
						</v-col>
					</v-row>
					<v-row no-gutters v-for="n in creationceh.length - 1" :key="n" :creationceh="creationceh[n - 1]">
						<v-col cols="12" class="cellstandart bordered"
							:style="n === activeCeh ? [active, hheight1] : hheight1">
							{{ creationceh[n - 1].name }}
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="10" :style="hheight3">
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Год" :mainlineheight="mainlineheight" />
							<Creation_line_one :creation="creation[creation.length - 1]" :lineheight="llineheight" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Месяц" :mainlineheight="mainlineheight" />
							<Creation_line_one v-for="n in creation.length - 1" :key="n" :creation="creation[n - 1]"
								:lineheight="llineheight" />
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

export default {
	name: 'creation-view',
	components: {
		Creation_line_one,
		Creation_Header,
	},
	data() {
		return {
			mainlineheight: 30,
			lineheight: 15,
			activeCeh: 7
		};
	},
	methods: {
	},
	created() {
		this.creationceh = require("@/db/Creation.json");
		this.creation = require("@/db/CreationPerMonth.json");
	},
	computed: {
		llineheight() {
			return (this.lineheight * 2.17).toFixed(0)
		},
		hheight3() {
			return {
				height: `${this.mainlineheight * 3}px`
			}
		},
		hheight2() {
			return {
				height: `${this.mainlineheight * 2}px`
			}
		},
		hheight1() {
			return {
				height: `${this.mainlineheight}px`
			}
		},
		active() {
			return {
				backgroundColor: "#a1d8f5",
				/* text-align: center; */
				fontWeight: "bold"
			}
		},
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
