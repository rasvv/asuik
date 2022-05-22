<template>
  <div>
    <h3>Состояние хранилищ ТРО</h3>
    <div class="table__header">
      <v-row no-gutters>
        <v-col cols="2" class="header header3">
          Хранилище
        </v-col>
        <v-col cols="1" class="header header2">
          Категория РАО
        </v-col>
        <v-col cols="4" class="header">
          <v-row class="subheader" no-gutters>
            <v-col cols="12">
              Проектный объем, м3
            </v-col>
          </v-row>
          <v-row class="header3" no-gutters>
            <v-col cols="6" class="header header1">
              Всего
            </v-col>
            <v-col cols="6" class="header header1">
              По категориям
            </v-col>
          </v-row>


        </v-col>
        <v-col cols="2" class="header header3">
          Размещено, м3
        </v-col>
        <v-col cols="1" class="header header2">
          % заполнения
        </v-col>
        <v-col cols="2" class="header header3">
          Свободный объем
        </v-col>

      </v-row>
    </div>
    <Line_three :hranenie="hranenie[0]" />
    <Line_two :hranenie="hranenie[1]" />
    <Line_one :hranenie="hranenie[2]" />
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

:root {
	--main-line-height: 40px;
	--line-height: 30px;
}

.table__header {
  width: 90vw;
  margin: 0 auto;
  background-color: #235ad1;
  height: calc(var(--main-line-height) * 3);
  text-align: center;
  color: #fff;
}

.table__line {
  width: 90vw;
  margin: 0 auto;
  background-color: #f8f8fa;
  text-align: center;
  color: #000;
}

.header {
  border: 1px solid #ddd;
}

.table__border {
  border: 1px solid #ddd;
}

.mbb {
  margin: -5px 0;
}

.subheader {
  padding: 0;
  margin: 0;
  height: calc(var(--main-line-height) * 2);
  line-height: calc(var(--main-line-height) * 2);
}

.header3 {
  line-height: calc(var(--main-line-height) * 3);
}

.header2 {
  line-height: calc(var(--main-line-height) * 3 / 2);
}

.header1 {
  line-height: var(--main-line-height);
  height: var(--main-line-height);
  align-self: start;
  padding: 0;
  margin: 0;
}
</style>
