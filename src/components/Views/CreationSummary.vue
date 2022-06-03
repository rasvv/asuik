<template>
	<div>
		<h3>Статистика образования РАО в {{ dat.ceh }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<Cehs title='ЦЕХ' />
				</v-col>
				<v-col cols="10" :style="HHEIGHT3">
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Год" />
							<Creation_line :creation="dat.data[dat.data.length - 1]" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<Creation_Header title="Месяц" />
							<Creation_line v-for="n in dat.data.length - 1" :key="n" :creation="dat.data[n - 1]" />
						</v-col>
					</v-row>

				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import Creation_line from './Lines/Creation_line.vue';
import Creation_Header from './Headers/CreationHeader.vue';
import Cehs from './Cehs.vue';
import { mapGetters } from 'vuex'

export default {
	name: 'creation-summary',
	components: {
		Creation_line,
		Creation_Header,
		Cehs
	},
	data() {
		return {
		};
	},
	methods: {
	},
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'CREATIONPERMONTH', 'ACTIVECEH'
		]),
		active() {
			return {
				backgroundColor: "#a1d8f5",
				fontWeight: "bold"
			}
		},
		dat() {
			return this.CREATIONPERMONTH[this.ACTIVECEH - 1]
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
