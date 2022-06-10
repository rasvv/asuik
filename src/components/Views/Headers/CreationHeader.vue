<template>
	<div class="table__header">
		<v-row no-gutters>
			<v-col cols="1" class="cellstandart table__header captionstyle bordered" :style="HHEIGHT2">
				{{ title }}
			</v-col>
			<v-col cols="2">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart captionstyle bordered" :style="HHEIGHT1">
							Квота
						</v-col>
						<v-row no-gutters>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								НАО
							</v-col>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								СВАО
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="9">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart captionstyle bordered" :style="HHEIGHT1">
							Образование
						</v-col>
						<v-row class="d-flex align-baseline" no-gutters>
							<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								НАО
							</v-col>
							<v-col cols="2" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								%НАО
							</v-col>
							<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								САО
							</v-col>
							<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								ВАО
							</v-col>
							<v-col cols="2" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								%СВАО
							</v-col>
							<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								МРАО
							</v-col>
							<v-col cols="4" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
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
import { mapGetters } from 'vuex'

export default {
	name: 'creation-header',
	props: ['title'],
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3'
		]),
	}	
}

</script>


<style>
</style>
