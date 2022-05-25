<template>
  <div>
    <h1>Demo examples of vue-chartjs</h1>
    <h3>Line Chart</h3>
    <!-- <line-chart></line-chart> -->
    <!-- <LineChart /> -->
    <LineChart :chart-data="datacollection" :chart-options="options" />
    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'

export default {
  name: 'VueChartJS',
  components: {
    LineChart,
  }
}
</script>