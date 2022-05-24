<template>
  <div>
    <h3>Заполнение хранилищ РАО</h3>
    <div class="table__header">
      <v-row no-gutters>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
          Хранилище
        </v-col>
        <v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
          Категория РАО
        </v-col>
        <v-col cols="4" class="header">
          <v-row>
            <v-col cols="12">
              <v-col class="pa-0 ma-0 d-flex justify-center align-center table__header subheader header">
                Проектный объем, м3
              </v-col>

              <v-row class="d-flex align-baseline" no-gutters>
                <v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center header header1">
                  Всего
                </v-col>
                <v-col cols="6" class="pa-0 ma-0 d-flex justify-center align-center header header1">
                  По категориям
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
          Размещено, м3
        </v-col>
        <v-col cols="1" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
          % заполнения
        </v-col>
        <v-col cols="2" class="pa-0 ma-0 d-flex justify-center align-center table__header header">
          Свободный объем, м3
        </v-col>

      </v-row>
    </div>
    <Line_three :hranenie="hranenie[0]" />
    <Line_two :hranenie="hranenie[1]" />
    <Line_one :hranenie="hranenie[2]" />
    <div class="table__subline pa-0 d-flex justify-center align-center ">
      <v-row class="pa-0 d-flex justify-center align-center header header1" no-gutters>
        <v-col cols="12">
          Временные хранилища
        </v-col>
      </v-row>
    </div>
    <Line_one :hranenie="hranenie[3]" />
    <Line_one :hranenie="hranenie[4]" />
    <Line_one :hranenie="hranenie[5]" />
    <Line_one :hranenie="hranenie[6]" />
  </div>
</template>

<script>
import Line_three from './Lines/Line_three.vue';
import Line_two from './Lines/Line_two.vue';
import Line_one from './Lines/Line_one.vue';

export default {
  name: 'hranenie-view',
  components: {
    Line_one,
    Line_two,
    Line_three
  },
  data() {
    return {
      hranenie: [],
      mainlineheight: 25,
      lineheight: 20,
    };
  },
  methods: {
  },
  created() {
    this.hranenie = require("@/db/hranenie.json");
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
  text-align: center;
  margin-bottom: 20px;
}

:root {
  --main-line-height: 40px;
  --line-height: 40px;
}

.table__header {
  width: 90vw;
  margin: 0 auto;
  /* background-color: #235ad1;#ecf5fa */
  background-color: #ecf5fa;
  height: calc(var(--main-line-height) * 3);
  text-align: center;
  font-weight: bold;
  /* color: #fff; */
}

.table__line {
  width: 90vw;
  margin: 0 auto;
  background-color: #f8f8fa;
  text-align: center;
  color: #000;
}

.table__subline {
  width: 90vw;
  margin: 0 auto;
  background-color: #ecf5fa;
  text-align: center;
  font-weight: bold;
  color: #000;
}

.header {
  border: 1px solid #ddd;
  /* height: calc(var(--main-line-height) * 3); */
}

.table__border {
  border: 1px solid #ddd;
}

.mbb {
  margin: 0;
}

.subheader {
  padding: 0;
  margin: 0;
  height: calc(var(--main-line-height) * 2);
  /* line-height: calc(var(--main-line-height) * 2); */
}

.header3 {
  height: calc(var(--main-line-height) * 3);
}

.header2 {
  height: calc(var(--main-line-height) * 2);
}

.header1 {
  height: var(--main-line-height);
  align-self: start;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
