<template>
	<div>
		<h3>Статистика образования РАО по цехам</h3>
		<!-- <div class="table__header">
			<v-row no-gutters>
				<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center table__header captionstyle bordered"
					:style="hheight3">
					Цех
				</v-col>
				<v-col cols="2" :style="hheight3">
					<v-row>
						<v-col cols="12">
							<v-col class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
								:style="hheight2">
								Квота
							</v-col>
							<v-row no-gutters>
								<v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									НАО
								</v-col>
								<v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
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
							<v-col class="pa-0 ma-0 d-flex justify-center align-center captionstyle subheader bordered"
								:style="hheight2">
								Образование
							</v-col>
							<v-row class="d-flex align-baseline" no-gutters>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									НАО
								</v-col>
								<v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									%НАО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									САО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									ВАО
								</v-col>
								<v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									%СВАО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									МРАО
								</v-col>
								<v-col cols="4" class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered"
									:style="hheight1">
									%ИТОГО
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div> -->

		<Creation_Header title="Цех" :mainlineheight="mainlineheight" />
		<Creation_line_one v-for="n in creation.length - 1" :key="n" :creation="creation[n - 1]"
			:lineheight="llineheight" />
		<div class="table__subline pa-0 d-flex justify-center align-center ">
			<v-row class="pa-0 d-flex justify-center align-center bordered" :style="hheight2" no-gutters>
				<v-col cols="12">
					ИТОГО по АЭС
				</v-col>
			</v-row>
		</div>
		<Creation_line_one :creation="creation[creation.length - 1]" :lineheight="llineheight" />
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
		};
	},
	methods: {
	},
	created() {
		this.creation = require("@/db/Creation.json");
		// this.creation = require("@/db/CreationPerMonth.json");
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
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
	margin: 40px 0 0;
	text-align: center;
	margin-bottom: 20px;
}

.table__header {
	width: 95%;
	margin: 0 auto;
	/* height: calc(mainlineheight * 3) + 'px'; */
}

.captionstyle {
	background-color: #ecf5fa;
	/* text-align: center; */
	font-weight: bold;
}

.table__line {
	width: 95%;
	margin: 0 auto;
	background-color: #f8f8fa;
	text-align: center;
	color: #000;
}

.table__subline {
	width: 95%;
	margin: 0 auto;
	background-color: #ecf5fa;
	text-align: center;
	font-weight: bold;
	color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.bordered {
	border: 1px solid #ddd;
	/* height: calc(var(--main-line-height) * 3); */
}

.table__border {
	border: 1px solid #ddd;
}

.mbb {
	margin: 0;
}

.subheader {
	height: calc(mainlineheight * 2) + 'px';
}

/* .header3 {
	height: calc(lineheight * 3) + 'px';
}

.header2 {
	height: calc(lineheight * 2) + 'px';
}

.header1 {
	height: lineheight + 'px';
} */

/* .hh1 {
	height: mainlineheight + 'px';
}

.hh2 {
	height: calc(mainlineheight * 2) + 'px';
}

.hh3 {
	height: calc(mainlineheight * 3) + 'px';
} */

/* .lh1 {
	height: llineheight + 'px';
	/* height: '50px'; */
/* } */

*/ .lh2 {
	height: calc(lineheight * 2) + 'px';
}

.lh3 {
	height: calc(lineheight * 3) + 'px';
}
</style>
