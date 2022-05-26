<template>
	<div>
		<h3>Статистика образования РАО в {{ creationceh[activeCeh - 1].name }}</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="2">
					<v-row no-gutters>
						<v-col cols="12" class="cellstandart table__header captionstyle bordered" :style="hheight3">
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
						<v-col cols="12" class="pa-10 ma-0">
							<ChartLine />
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import ChartLine from './VueChartJS.vue';

export default {
	name: 'creation-view',
	components: {
		ChartLine
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
