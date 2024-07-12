import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PageMain.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/PageErrorNotFound.vue'),
  },
];

export default routes;
