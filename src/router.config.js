const home = () =>
    import ( /* webpackChunkName: "home" */ './pages/home.vue');

const routes = [
    {
        path: '/home',
        component: home
    }
];

export default routes;