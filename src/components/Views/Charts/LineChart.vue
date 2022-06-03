<template>
  <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData1" :chart-id="chartId"
    :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
    :height="height" />
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
import { mapGetters } from 'vuex'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 700
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // creationPerMonth: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  methods: {
    arrChange(i, rr) {
      this.CHARTDATA.datasets[i].data = rr
    },
    mappingArr() {

    }
  },
  computed: {
    ...mapGetters([
      'CHARTDATA', 'CREATIONPERMONTH', 'ACTIVECEH'
    ]),
    chartData1() {
      let norma = 0
      let nao = 0
      let sao = 0
      let vao = 0
      let mrao = 0
      let itogo = 0
      let i = 0

      let rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          norma += +item.normnao + +item.normsvao
        }
        return [norma]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))
      i += 1

      rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          nao += +item.nao
        }
        return [nao]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))
      i += 1

      rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          sao += +item.sao
        }
        return [sao]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))
      i += 1

      rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          vao += +item.vao
        }
        return [vao]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))
      i += 1

      rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          mrao += +item.mrao
        }
        return [mrao]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))
      i += 1

      rr = [0, ...this.dat.data.map(item => {
        if (item.id < 100) {
          itogo += +item.nao + +item.sao + +item.vao + +item.mrao
        }
        return [+itogo.toFixed(2)]
      })]
      this.arrChange(i, rr.slice(0, rr.length - 1))

      return this.CHARTDATA
      // return {}

    },
    dat() {
      return this.CREATIONPERMONTH[this.ACTIVECEH - 1]
    }
  },
  created() {

  },
}
</script>