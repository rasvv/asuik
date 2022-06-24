import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/vue-asuik'
		},
		{
      path: '/vue-asuik',
      name: 'main',
      component: () => import('../components/Views/Creation.vue')
		},
		{
      path: '/Hranenie',
      name: 'Hranenie',
      component: () => import('../components/Views/Hranenie.vue')
		},		{
      path: '/HranenieOpros',
      name: 'HranenieOpros',
      component: () => import('../components/Views/HranenieOpros.vue')
		},
		{
      path: '/Creation',
      name: 'Creation',
      component: () => import('../components/Views/Creation.vue')
		},
		{
      path: '/CreationSummary',
      name: 'CreationSummary',
      component: () => import('../components/Views/CreationSummary.vue')
		},
		{
      path: '/LineChartSummary',
      name: 'LineChartSummary',
      component: () => import('../components/Views/LineChartSummary.vue')
		},
		{
      path: '/PieChartSummary',
      name: 'PieChartSummary',
      component: () => import('../components/Views/PieChartSummary.vue')
		},
		{
      path: '/PolarChartSummary',
      name: 'PolarChartSummary',
      component: () => import('../components/Views/PolarChartSummary.vue')
		},
		{
      path: '/BarChartSummary',
      name: 'BarChartSummary',
      component: () => import('../components/Views/BarChartSummary.vue')
		}
	]
})

export default router