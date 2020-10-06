import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		alias: '/login'
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/Register.vue'),
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () =>
			import(/* webpackChunkName: "portfolio" */ '../views/portfolio/Portfolio.vue'),
		children: [
			{
				path: '',
				alias: 'cv',
				name: 'Cv',
				component: () =>
			import(/* webpackChunkName: "cv" */ '../views/portfolio/Cv.vue'),
			},
			{
				path: 'competences',
				name: 'Competences',
				component: () =>
			import(/* webpackChunkName: "competences" */ '../views/portfolio/Competences.vue'),
			},
			{
				path: 'experience',
				name: 'Experience',
				component: () =>
			import(/* webpackChunkName: "experience" */ '../views/portfolio/Experience.vue'),
			},
			{
				path: 'patrimoine',
				name: 'Patrimoine',
				component: () =>
			import(/* webpackChunkName: "patrimoine" */ '../views/portfolio/Patrimoine.vue'),
			},
			{
				path: 'situation',
				name: 'Situation',
				component: () =>
			import(/* webpackChunkName: "situation" */ '../views/portfolio/Situation.vue'),
			},
			{
				path: 'veille',
				name: 'Veille',
				component: () =>
			import(/* webpackChunkName: "veille" */ '../views/portfolio/Veille.vue'),
			},
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if((to.name === 'Portfolio' || to.name === 'Cv' || to.name === 'Competences' || to.name === 'Experience' || to.name === 'Patrimoine' || to.name === 'Situation' || to.name === 'Veille') && !store.getters.isAuthenticated) {
		next('/login')
	} else {
		next()
	}
})

export default router
