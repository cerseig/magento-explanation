import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lexicon from './components/Lexicon.vue'
import Competitors from './components/Competitors.vue'
import Advantages from './components/Advantages.vue'
import Inconveniences from './components/Inconveniences.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/lexicon',
            name: 'lexicon',
            component: Lexicon
        },
        {
            path: '/competitors',
            name: 'competitors',
            component: Competitors
        },
        {
            path: '/advantages',
            name: 'advantages',
            component: Advantages
        },
        {
            path: '/inconveniences',
            name: 'inconveniences',
            component: Inconveniences
        }
    ]
})
