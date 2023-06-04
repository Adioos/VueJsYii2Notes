import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from "@/layouts/DefaultLayout";
import AuthLayout from "@/layouts/AuthLayout";
import LoginView from "@/views/LoginView";
import RegistrationView from "@/views/RegistrationView";
import authService from "@/services/auth.service";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Default',
        redirect: '/home',
        component: DefaultLayout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: HomeView,
            }
        ]
    },
    {
        path: '/auth',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: LoginView
            },
            {
                path: 'register',
                name: 'register',
                component: RegistrationView
            }
        ]
    },
    {
        path: '/login',
        redirect: '/auth/login'
    },
    {
        path: '/register',
        redirect: '/auth/register'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.name === 'home' && !authService.isLoggedIn()) {
        next({name: 'login'})
    } else if (authService.isLoggedIn() && to.name !== 'home') {
        next({name: 'home'})
    } else {
        next();
    }
})

export default router
