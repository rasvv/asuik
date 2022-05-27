<template>
	<div>
		<h3>Заполнение хранилищ РАО</h3>
		<Hranenie_Header :mainlineheight="mainlineheight" />

		<Line_three :hranenie="hranenie[0]" />
		<Line_two :hranenie="hranenie[1]" />
		<Line_one :hranenie="hranenie[2]" :lineheight="lineheight" />
		<div class="table__subline pa-0 d-flex justify-center align-center ">
			<v-row class="pa-0 d-flex justify-center align-center header header1" no-gutters>
				<v-col cols="12">
					Временные хранилища
				</v-col>
			</v-row>
		</div>
		<Line_one v-for="n in [3, 4, 5, 6]" :key="n" :hranenie="hranenie[n]" :lineheight="lineheight" />
	</div>
</template>

<script>
import Hranenie_Header from './Headers/HranenieHeader.vue';
import Line_three from './Lines/Line_three.vue';
import Line_two from './Lines/Line_two.vue';
import Line_one from './Lines/Line_one.vue';

export default {
	name: 'hranenie-view',
	components: {
		Hranenie_Header,
		Line_one,
		Line_two,
		Line_three
	},
	data() {
		return {
			hranenie: [],
			mainlineheight: 25,
			lineheight: 20,
		};
	},
	methods: {
	},
	created() {
		this.hranenie = require("@/db/hranenie.json");
	},
}

</script>

<style>
</style>
