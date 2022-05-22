<template>
	<v-app>
		<v-main>
			<Hranenie />
		</v-main>
	</v-app>
</template>

<script>
import Hranenie from './components/Hranenie.vue';

export default {
	name: 'App',

	components: {
		Hranenie
	},

	data: () => ({
		//
	}),
};
</script>
