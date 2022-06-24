<template>
	<div>
		<v-row no-gutters class="my-1">
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					src="@/assets/icons/norm.jpg"
				></v-img>
				</v-col>
			<v-col cols="9">Норма</v-col>
		</v-row>
		<v-row no-gutters class="my-1">
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					src="@/assets/icons/move.jpg"
				></v-img>
				</v-col>
			<v-col cols="9">Контейнер перемещен</v-col>
		</v-row>
		<v-row no-gutters class="my-1">
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					src="@/assets/icons/notfind.jpg"
				></v-img>
				</v-col>
			<v-col cols="9">Метка не найдена</v-col>
		</v-row>
		<v-row no-gutters class="my-1">
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					src="@/assets/icons/error.jpg"
				></v-img>
				</v-col>
			<v-col cols="9">Метка удалена</v-col>
		</v-row>
		<v-row no-gutters class="my-1">
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					src="@/assets/icons/battery.jpg"
				></v-img>
				</v-col>
			<v-col cols="9">Батарея разрядилась</v-col>
		</v-row>

	</div>
</template>

<script>
export default {
	name: 'image-icons',
}

</script>
