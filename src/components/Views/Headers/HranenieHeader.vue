<template>
	<div class="table__header">
		<v-row no-gutters>
			<v-col cols="2" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				Хранилище
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				Категория РАО
			</v-col>
			<v-col cols="4">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart subheader captionstyle bordered" :style="HHEIGHT1">
							Проектный объем, м3
						</v-col>

						<v-row class="d-flex align-baseline" no-gutters>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Всего
							</v-col>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								По категориям
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				Размещено, м3
			</v-col>
			<v-col cols="3" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				% заполнения
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				Свободный объем, м3
			</v-col>

		</v-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
// import '@/components/scripts/sizeline.js'

export default {
	name: 'hranenie-header',
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3'
		]),
	}
}

</script>


<style>
</style>
