<template>
	<div>
		<h3>Заполнение хранилищ РАО</h3>
		<Hranenie_Header />

		<Hranenie_Line :hranenie="HRANENIE[0]" :rows="3" />
		<Hranenie_Line :hranenie="HRANENIE[1]" :rows="2" />
		<Hranenie_Line :hranenie="HRANENIE[2]" :rows="1" />
		<div class="table__subline bordered" :style="HHEIGHT1">
			Временные хранилища
		</div>
		<Hranenie_Line v-for="n in [3, 4, 5, 6]" :key="n" :hranenie="HRANENIE[n]" :rows="1" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Hranenie_Header from './Headers/HranenieHeader.vue';
import Hranenie_Line from './Lines/Hranenie_Line.vue';

export default {
	name: 'hranenie-view',
	components: {
		Hranenie_Header,
		Hranenie_Line
	},
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'HRANENIE'
		]),
	},
}

</script>

<style>
</style>
