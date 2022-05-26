<template>
	<v-app>
		<v-main>
			<Creation />
		</v-main>
	</v-app>
</template>

<script>
// import Hranenie from './components/Hranenie.vue';
import Creation from './components/ChartSummary.vue';

export default {
	name: 'App',

	components: {
		Creation
	},

	data: () => ({
		//
	}),
};
</script>