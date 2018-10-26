const home = () =>
    import ( /* webpackChunkName: "home" */ './pages/home.vue');
const table = () =>
    import ( /* webpackChunkName: "table" */ './pages/table.vue');
const tab = () =>
    import ( /* webpackChunkName: "tab" */ './pages/tab.vue');
const tree = () =>
    import ( /* webpackChunkName: "tree" */ './pages/tree.vue');
const text_group = () =>
    import ( /* webpackChunkName: "text_group" */ './pages/text_group.vue');
const navigation = () =>
    import ( /* webpackChunkName: "navigation" */ './pages/navigation.vue');
const my_panel = () =>
    import ( /* webpackChunkName: "my_panel" */ './pages/my_panel.vue');
const my_button = () =>
    import ( /* webpackChunkName: "my_button" */ './pages/my_button.vue');
const my_badge = () =>
    import ( /* webpackChunkName: "my_badge" */ './pages/my_badge.vue');
const modal = () =>
    import ( /* webpackChunkName: "modal" */ './pages/modal.vue');
const inner_page = () =>
    import ( /* webpackChunkName: "inner_page" */ './pages/inner_page.vue');
const filter = () =>
    import ( /* webpackChunkName: "filter" */ './pages/filter.vue');
const directive = () =>
    import ( /* webpackChunkName: "directive" */ './pages/directive.vue');

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
    },
    {
        path: '/tree',
        component: tree
    },
    {
        path: '/text_group',
        component: text_group
    },
    {
        path: '/navigation',
        component: navigation
    },
    {
        path: '/my_panel',
        component: my_panel
    },
    {
        path: '/my_button',
        component: my_button
    },
    {
        path: '/my_badge',
        component: my_badge
    },
    {
        path: '/modal',
        component: modal
    },
    {
        path: '/inner_page',
        component: inner_page
    },
    {
        path: '/filter',
        component: filter
    },
    {
        path: '/directive',
        component: directive
    }
];

export default routes;