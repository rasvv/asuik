<template>
  <div>
    <div class="table__line">
      <v-row no-gutters>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header1">
          {{ hranenie.name }}
        </v-col>
        <v-col cols="1" class="header header1">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].cat }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center header header1">
          {{ hranenie.proectvalue }}
        </v-col>
        <v-col cols="2" class="header header1">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].proect }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="header header1">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ hranenie.category[0].put }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="header header1">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-progress-linear class="mbb" :color=this.col1 height="38" :value=this.per1>
              <v-col cols="12">
                {{ per1 }}
              </v-col>
            </v-progress-linear>
          </v-row>
        </v-col>

        <v-col cols="2" class="header header1">
          <v-row class="pa-0 ma-0 d-flex justify-center align-center header header1" no-gutters>
            <v-col cols="12">
              {{ raz1 }}
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
    col1() {
      if (this.per1 < 60) { return "green" }
      else if (this.per1 < 80) { return "yellow" }
      else { return "red" }
    },
    raz1() {
      return (this.hranenie.category[0].proect - this.hranenie.category[0].put).toFixed(2)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
