import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import ProjectPage from './pages/ProjectPage.vue'
import ProjectSingle from './pages/ProjectSingle.vue'
import Contact from './pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'blog',
            component: ProjectPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/blog/:slug',
            name: 'project-single',
            component: ProjectSingle
        },
    ]
})


export{router};