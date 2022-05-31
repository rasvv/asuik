<template>
	<div>
		<h3>Статистика образования РАО по цехам</h3>
		<Creation_Header title="Цех" :hh1="HHEIGHT1" :hh2="HHEIGHT2" :hh3="HHEIGHT3" />
		<Creation_line_one v-for="n in creation.length - 1" :key="n" :creation="creation[n - 1]"
			:lineheight="LINEHEIGHT" />
		<div class="table__subline pa-0 d-flex justify-center align-center ">
			<v-row class="pa-0 d-flex justify-center align-center bordered" :style="HHEIGHT2" no-gutters>
				<v-col cols="12">
					ИТОГО по АЭС
				</v-col>
			</v-row>
		</div>
		<Creation_line_one :creation="creation[creation.length - 1]" :lineheight="LINEHEIGHT" />
	</div>
</template>

<script>
import Creation_line_one from './Lines/Creation_line_one.vue';
import Creation_Header from './Headers/CreationHeader.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'creation-view',
	components: {
		Creation_line_one,
		Creation_Header,
	},
	data() {
		return {
		};
	},

	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATION'
		]),
		creation() {
			return this.CREATION.creation
		}
	},
}


</script>

<style>
</style>
