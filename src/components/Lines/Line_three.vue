<template>
	<div>
		<div class="table__line">
			<v-row no-gutters>
				<v-col cols="2" class="header header3">
					ХТО
				</v-col>
				<v-col cols="1" class="header header3">
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							ВАО
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							САО
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							НАО
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="2" class="header header3">
					5760
				</v-col>
				<v-col cols="2" class="header header3">
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							1880
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							1880
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							2000
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="2" class="header header3">
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							1880
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							1880
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							2000
						</v-col>
					</v-row>
				</v-col>
				<v-col cols="1" class="header header3">
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							100
							<v-progress-linear class="mbb" color="red" value="100"></v-progress-linear>
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							100
							<v-progress-linear class="mbb" color="red" value="100"></v-progress-linear>
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							100
							<v-progress-linear class="mbb" color="red" value="100"></v-progress-linear>
						</v-col>
					</v-row>
				</v-col>

				<v-col cols="2" class="header header3">
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							0
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							0
						</v-col>
					</v-row>
					<v-row class="header header1" no-gutters>
						<v-col cols="12">
							0
						</v-col>
					</v-row>
				</v-col>

			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	name: 'line-three',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
	--main-line-height: 25px;
	--line-height: 20px;
}

.table__header {
	width: 90vw;
	margin: 0 auto;
	background-color: #235ad1;
	height: calc(var(--main-line-height) * 3);
	text-align: center;
	color: #fff;
}

.table__line {
	width: 90vw;
	margin: 0 auto;
	background-color: #f8f8fa;
	text-align: center;
	color: #000;
}

.header {
	border: 1px solid #ddd;
}

.table__border {
	border: 1px solid #ddd;
}

.mbb {
	margin: -5px 0;
}

.subheader {
	padding: 0;
	margin: 0;
	height: calc(var(--main-line-height) * 2);
	line-height: calc(var(--main-line-height) * 2);
}

.header3 {
	line-height: calc(var(--main-line-height) * 3);
}

.header2 {
	line-height: calc(var(--main-line-height) * 3 / 2);
}

.header1 {
	line-height: var(--main-line-height);
	height: var(--main-line-height);
	align-self: start;
	padding: 0;
	margin: 0;
}
</style>
