<template>
	<div class="table__header">
		<v-row no-gutters>
			<v-col cols="2" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				№ акта-паспорта
			</v-col>
			<v-col cols="4">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart subheader captionstyle bordered" :style="HHEIGHT1">
							№ Контейнера
						</v-col>

						<v-row class="d-flex align-baseline" no-gutters>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Заводской
							</v-col>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Регистрационный
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="4">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart subheader captionstyle bordered" :style="HHEIGHT1">
							Местонахождения
						</v-col>

						<v-row class="d-flex align-baseline" no-gutters>
							<v-col cols="4" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Секция
							</v-col>
							<v-col cols="4" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Ярус
							</v-col>
							<v-col cols="4" class="cellstandart captionstyle bordered" :style="HHEIGHT1">
								Ячейка
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="2" class="cellstandart captionstyle bordered" :style="HHEIGHT2">
				Состояние
			</v-col>

		</v-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'hranenie-opros-header',
	computed: {
		...mapGetters([
			'HHEIGHT1', 'HHEIGHT2', 'HHEIGHT3'
		]),
	}
}

</script>


<style>
</style>
