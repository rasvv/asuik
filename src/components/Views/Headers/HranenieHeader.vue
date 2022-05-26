<template>
	<div class="table__header">
		<v-row no-gutters>
			<v-col cols="2" class="cellstandart captionstyle bordered" :style="hheight3">
				Хранилище
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="hheight3">
				Категория РАО
			</v-col>
			<v-col cols="4" class="header">
				<v-row>
					<v-col cols="12">
						<v-col class="cellstandart subheader captionstyle bordered" :style="hheight2">
							Проектный объем, м3
						</v-col>

						<v-row class="d-flex align-baseline" no-gutters>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="hheight1">
								Всего
							</v-col>
							<v-col cols="6" class="cellstandart captionstyle bordered" :style="hheight1">
								По категориям
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="hheight3">
				Размещено, м3
			</v-col>
			<v-col cols="3" class="cellstandart captionstyle bordered" :style="hheight3">
				% заполнения
			</v-col>
			<v-col cols="1" class="cellstandart captionstyle bordered" :style="hheight3">
				Свободный объем, м3
			</v-col>

		</v-row>
	</div>
</template>

<script>
import '@/components/scripts/sizeline.js'

export default {
	name: 'hranenie-header',
	props: ['title', 'mainlineheight'],
}

</script>


<style>
</style>
