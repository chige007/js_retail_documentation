const home = () =>
    import ( /* webpackChunkName: "home" */ './pages/home.vue');
const table = () =>
    import ( /* webpackChunkName: "table" */ './pages/table.vue');
const tab = () =>
    import ( /* webpackChunkName: "tab" */ './pages/tab.vue');

const routes = [
    {
        path: '/home',
        component: home
    },
    {
        path: '/table',
        component: table
    },
    {
        path: '/tab',
        component: tab
    }
];

export default routes;