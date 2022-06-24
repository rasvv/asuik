<template>
	<v-app
    class="d-flex justify-center"
  >
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <!-- <Footer /> -->
  </v-app>

</template>

<script>

import Header from './components/Header.vue'

export default {
	name: 'App',

	components: {
		Header
	},
};
</script>

<style>


h3 {
	margin: 40px 0 0;
	text-align: center;
	margin-bottom: 20px;
}

.h40 {
  height: 60vh;
}

.h40p {
  height: calc(60vh - 125px);
  overflow-y: auto;
}

.scrolled {
	max-height: 60vh;
	overflow-y: auto;
}

.table__header {
	width: 95%;
	margin: 0 auto;
	/* height: calc(mainlineheight * 3) + 'px'; */
}

.captionstyle {
	background-color: #ecf5fa;
	/* text-align: center; */
	font-weight: bold;
}

.cellstandart {
	margin: 0;
	padding: 0;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}

.table__line {
	width: 95%;
	margin: 0 auto;
	background-color: #f8f8fa;
	text-align: center;
	color: #000;
}

.table__subline {
	width: 95%;
	margin: 0 auto;
	background-color: #ecf5fa;
	text-align: center;
	font-weight: bold;
	color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.bordered {
	border: 1px solid #ddd;
	/* height: calc(var(--main-line-height) * 3); */
}

.v-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #035ea1;
    background: transparent;
    border-radius: 4px;
    font-family: Roboto,serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 4px;
    border: 1px solid #035ea1;
    cursor: pointer;	
}

.border {
	border: 1px solid #8ca6b9;
	border-radius: 5px;
	padding: 10px;
	box-shadow: 0 0 3px #035ea1;
	/* height: calc(var(--main-line-height) * 3); */
}

fieldset {
	width: 100%;
  /* border: 1px solid #5c97c2; */
  /* Чтобы подстраивался под контент */
  display: inline-block;
}

legend {
  color: #339dc7;
	font-style: italic;
}

.table__border {
	border: 1px solid #ddd;
}

.mbb {
	margin: 0;
}

/* .subheader {
  height: calc(mainlineheight * 2) + 'px';
} */
</style>