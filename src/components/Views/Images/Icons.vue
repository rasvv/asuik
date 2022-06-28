<template>
	<div>
		<v-row v-for="contstate in CONTSTATES" :key="contstate.state" no-gutters>
			<v-col cols="3" class="d-flex justify-center">
				<v-img class="rounded-lg"
					max-height="30"
					max-width="30"
					position="center center"
					alt="logo"
					contain					
					:src="require(`@/${contstate.img}`)" 
				></v-img>
				</v-col>
			<v-col cols="9">{{contstate.description}}</v-col>
		</v-row>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'image-icons',
  computed: {
    ...mapGetters([
      'CONTSTATES'
    ]),
	}	
}

</script>
