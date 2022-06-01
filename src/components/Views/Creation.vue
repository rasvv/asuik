<template>
	<div>
		<h3>Статистика образования РАО по цехам</h3>
		<Creation_Header title="Цех" />
		<Creation_line v-for="n in CREATION.length - 1" :key="n" :creation="CREATION[n - 1]" />
		<div class="table__subline bordered" :style="HHEIGHT2">
			ИТОГО по АЭС
		</div>
		<Creation_line :creation="CREATION[CREATION.length - 1]" />
	</div>
</template>

<script>
import Creation_line from './Lines/Creation_line.vue';
import Creation_Header from './Headers/CreationHeader.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'creation-view',
	components: {
		Creation_line,
		Creation_Header,
	},
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATION'
		]),
	},
}


</script>

<style>
</style>
