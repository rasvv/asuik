<template>
	<div>
		<h3>Статистика образования РАО по цехам</h3>
		<!-- <div class="table__header">
			<v-row no-gutters>
				<v-col cols="1" class="cellstandart table__header captionstyle bordered"
					:style="hheight3">
					Цех
				</v-col>
				<v-col cols="2" :style="hheight3">
					<v-row>
						<v-col cols="12">
							<v-col class="cellstandart captionstyle bordered"
								:style="hheight2">
								Квота
							</v-col>
							<v-row no-gutters>
								<v-col cols="6" class="cellstandart captionstyle bordered"
									:style="hheight1">
									НАО
								</v-col>
								<v-col cols="6" class="cellstandart captionstyle bordered"
									:style="hheight1">
									СВАО
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="9">
					<v-row>
						<v-col cols="12">
							<v-col class="cellstandart captionstyle subheader bordered"
								:style="hheight2">
								Образование
							</v-col>
							<v-row class="d-flex align-baseline" no-gutters>
								<v-col cols="1" class="cellstandart captionstyle bordered"
									:style="hheight1">
									НАО
								</v-col>
								<v-col cols="2" class="cellstandart captionstyle bordered"
									:style="hheight1">
									%НАО
								</v-col>
								<v-col cols="1" class="cellstandart captionstyle bordered"
									:style="hheight1">
									САО
								</v-col>
								<v-col cols="1" class="cellstandart captionstyle bordered"
									:style="hheight1">
									ВАО
								</v-col>
								<v-col cols="2" class="cellstandart captionstyle bordered"
									:style="hheight1">
									%СВАО
								</v-col>
								<v-col cols="1" class="cellstandart captionstyle bordered"
									:style="hheight1">
									МРАО
								</v-col>
								<v-col cols="4" class="cellstandart captionstyle bordered"
									:style="hheight1">
									%ИТОГО
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div> -->

		<Creation_Header title="Цех" :hh1="hh1" :hh2="hh2" :hh3="hh3" />
		<!-- <Creation_line_one v-for="n in creat.length - 1" :key="n" :creation="creat[n - 1]" :lineheight="lh" /> -->
		<div class="table__subline pa-0 d-flex justify-center align-center ">
			<v-row class="pa-0 d-flex justify-center align-center bordered" :style="hh2" no-gutters>
				<v-col cols="12">
					ИТОГО по АЭС
				</v-col>
			</v-row>
		</div>
		<Creation_line_one :creation="creation[creation.length - 1]" :lineheight="lh" />
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
			// mainlineheight: 30,
			// lineheight: 15,
			creat: [],
			hh1: {},
			hh2: {},
			hh3: {},
			lh: {},

		};
	},
	methods: {
		onGethh1() { this.hh1 = this.HHEIGHT1 },
		onGethh2() { this.hh2 = this.HHEIGHT2 },
		onGethh3() {
			console.log(this.HHEIGHT3);
			this.hh3 = this.HHEIGHT3
		},
		onGetlh() {
			console.log(this.LINEHEIGHT);
			this.lh = this.LINEHEIGHT
		},
		onGetCreation() { this.creat = this.creation }
	},

	computed: {
		// this.creation = this.$store.dispatch('creation');
		// console.log(this.creation);
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3', 'LINEHEIGHT', 'creation'
			// 'getPhotoCurrentPage'
		]),
	},
	mounted() {
		this.onGetCreation()
		this.onGethh1()
		this.onGethh2()
		this.onGethh3()
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
