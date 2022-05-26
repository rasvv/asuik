<template>
  <div>
    <div class="table__line">
      <v-row no-gutters>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header3">
          {{ hranenie.name }}
        </v-col>
        <v-col cols="1" class="header header3">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" width="100%" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].cat }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[1].cat }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[2].cat }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header3">
          {{ hranenie.proectvalue }}
        </v-col>
        <v-col cols="2" class="header header3">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].proect }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[1].proect }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[2].proect }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="header header3">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].put }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[1].put }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[2].put }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="header header3">
          <v-row class="header header1" no-gutters>
            <v-progress-linear class="mbb" :color=this.col1 height="38" :value=this.per1>
              <v-col cols="12">
                {{ per1 }}
              </v-col>
            </v-progress-linear>
          </v-row>
          <v-row class="header header1" no-gutters>
            <v-progress-linear class="mbb" :color=this.col2 height="38" :value=this.per2>
              <v-col cols="12">
                {{ per2 }}
              </v-col>
            </v-progress-linear>
          </v-row>
          <v-row class="header header1" no-gutters>
            <v-progress-linear class="mbb" :color=this.col3 height="38" :value=this.per3>
              <v-col cols="12">
                {{ per3 }}
              </v-col>
            </v-progress-linear>
          </v-row>
        </v-col>

        <v-col cols="2" class="header header3">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ raz1 }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ raz2 }}
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ raz3 }}
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'line-three',
  props: ['hranenie'],
  methods: {
    percent(val1, val2) {
      return ((100 * val2 / val1).toFixed(2))
    }
  },
  computed: {
    per1() {
      return this.percent(this.hranenie.category[0].proect, this.hranenie.category[0].put)
    },
    per2() {
      return this.percent(this.hranenie.category[1].proect, this.hranenie.category[1].put)
    },
    per3() {
      return this.percent(this.hranenie.category[2].proect, this.hranenie.category[2].put)
    },
    col1() {
      if (this.per1 < 60) { return "green" }
      else if (this.per1 < 80) { return "yellow" }
      else { return "red" }
    },
    col2() {
      if (this.per2 < 60) { return "green" }
      else if (this.per2 < 80) { return "yellow" }
      else { return "red" }
    },
    col3() {
      if (this.per3 < 60) { return "green" }
      else if (this.per3 < 80) { return "yellow" }
      else { return "red" }
    },
    raz1() {
      return (this.hranenie.category[0].proect - this.hranenie.category[0].put).toFixed(2)
    },
    raz2() {
      return (this.hranenie.category[1].proect - this.hranenie.category[1].put).toFixed(2)
    },
    raz3() {
      return (this.hranenie.category[2].proect - this.hranenie.category[2].put).toFixed(2)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
