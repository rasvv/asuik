<template>
  <v-app>
    <v-main>
      <v-row class="d-flex justify-center mt-2">
        <v-btn @click="changeForm('Creation')">Образование</v-btn>
        <!-- <v-btn @click="changeForm('Hranenie')">Хранение</v-btn>
        <v-btn @click="changeForm('CreationSummary')">Образование по цехам</v-btn>
        <v-btn @click="changeForm('ChartSummary')">Графики</v-btn> -->
      </v-row>
      <Creation v-show="form === 'Creation'" />
      <CreationSummary v-show="form === 'CreationSummary'" />
      <ChartSummary v-show="form === 'ChartSummary'" />
      <Hranenie v-show="form === 'Hranenie'" />
    </v-main>
  </v-app>
</template>

<script>
// import Hranenie from './components/Hranenie.vue';
// import { store } from './store';
import Creation from './components/Views/Creation.vue';
// import Hranenie from './components/Views/Hranenie.vue';
// import CreationSummary from './components/Views/CreationSummary.vue';
// import ChartSummary from './components/Views/ChartSummary.vue';

export default {
  name: 'App',

  components: {
    Creation,
    // Hranenie,
    // CreationSummary,
    // ChartSummary
  },

  data() {
    return {
      form: 'Creation'
    }
  },
  methods: {
    changeForm(name) {
      this.form = name
      console.log(name);
    }
  }
};
</script>

<style>
h3 {
  margin: 40px 0 0;
  text-align: center;
  margin-bottom: 20px;
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