<template>
	<div class="table__header">
		<v-row no-gutters>
			<v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center table__header captionstyle bordered"
				:style="hheight3">
				{{ title }}
			</v-col>
			<v-col cols="2" :style="hheight3">
				<v-row>
					<v-col cols="12">
						<v-col class="pa-0 ma-0 d-flex justify-center align-center captionstyle bordered" :style="hheight2">
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
	</div>
</template>

<script src="@/components/scripts/sizeline.js"></script>

<script>
// import * as styl from '@/components/scripts/sizeline.js'
export default {
	name: 'creation-header',
	props: ['title', 'mainlineheight'],
}

</script>


<style>
</style>
