<template>
	<div>
		<h3>Статистика образования РАО по цехам</h3>
		<div class="table__header">
			<v-row no-gutters>
				<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
					Цех
				</v-col>
				<v-col cols="2" class="header">
					<v-row>
						<v-col cols="12">
							<v-col class="pa-0 ma-0 d-flex justify-center align-center table__header subheader header">
								Квота
							</v-col>
							<v-row class="d-flex align-baseline" no-gutters>
								<v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									НАО
								</v-col>
								<v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									СВАО
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="9" class="header">
					<v-row>
						<v-col cols="12">
							<v-col class="pa-0 ma-0 d-flex justify-center align-center table__header subheader header">
								Образование
							</v-col>
							<v-row class="d-flex align-baseline" no-gutters>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									НАО
								</v-col>
								<v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									%НАО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									САО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									ВАО
								</v-col>
								<v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									%СВАО
								</v-col>
								<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									МРАО
								</v-col>
								<v-col cols="4" class="pa-0 ma-0 d-flex justify-center align-center header header1">
									%ИТОГО
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>
		<Creation_line_one v-for="n in creation.length - 2" :key="n" :creation="creation[n]" />
		<div class="table__subline pa-0 d-flex justify-center align-center ">
			<v-row class="pa-0 d-flex justify-center align-center header header1" no-gutters>
				<v-col cols="12">
					ИТОГО по АЭС
				</v-col>
			</v-row>
		</div>
		<Creation_line_one :creation="creation[creation.length - 1]" />
	</div>
</template>

<script>
import Creation_line_one from './Lines/Creation_line_one.vue';

export default {
	name: 'hranenie-view',
	components: {
		Creation_line_one,
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
		this.creation = require("@/db/Creation.json");
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
	margin: 40px 0 0;
	text-align: center;
	margin-bottom: 20px;
}

:root {
	--main-line-height: 35px;
	--line-height: 35px;
}

.table__header {
	width: 90vw;
	margin: 0 auto;
	/* background-color: #235ad1;#ecf5fa */
	background-color: #ecf5fa;
	height: calc(var(--main-line-height) * 3);
	text-align: center;
	font-weight: bold;
	/* color: #fff; */
}

.table__line {
	width: 90vw;
	margin: 0 auto;
	background-color: #f8f8fa;
	text-align: center;
	color: #000;
}

.table__subline {
	width: 90vw;
	margin: 0 auto;
	background-color: #ecf5fa;
	text-align: center;
	font-weight: bold;
	color: #000;
}

.header {
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
	padding: 0;
	margin: 0;
	height: calc(var(--main-line-height) * 2);
	/* line-height: calc(var(--main-line-height) * 2); */
}

.header3 {
	height: calc(var(--main-line-height) * 3);
}

.header2 {
	height: calc(var(--main-line-height) * 2);
}

.header1 {
	height: var(--main-line-height);
	align-self: start;
	padding: 0;
	margin: 0;
	width: 100%;
}
</style>
