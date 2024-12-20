import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "BgLayout",
      component: () => import('../components/layout/BgLayout.vue'),
      meta: {
        auth: true
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
  ]
})
export default router
