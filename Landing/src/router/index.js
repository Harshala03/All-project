import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index.vue'),
  },
  // {
  //   path: "/index-two",
  //   name: "index-two",
  //   component: () => import('@/pages/index/index-two.vue'),
  // },
  // {
  //   path: "/index-three",
  //   name: "index-three",
  //   component: () => import('@/pages/index/index-three.vue'),
  // },
  // {
  //   path: "/index-four",
  //   name: "index-four",
  //   component: () => import('@/pages/index/index-four.vue'),
  // },
  // {
  //   path: "/index-five",
  //   name: "index-five",
  //   component: () => import('@/pages/index/index-five.vue'),
  // },
  // {
  //   path: "/index-six",
  //   name: "index-six",
  //   component: () => import('@/pages/index/index-six.vue'),
  // },
  // {
  //   path: "/index-seven",
  //   name: "index-seven",
  //   component: () => import('@/pages/index/index-seven.vue'),
  // },
  // {
  //   path: "/index-eight",
  //   name: "index-eight",
  //   component: () => import('@/pages/index/index-eight.vue'),
  // },
  // {
  //   path: "/buy",
  //   name: "buy",
  //   component: () => import('@/pages/buy.vue'),
  // },
  // {
  //   path: "/sell",
  //   name: "sell",
  //   component: () => import('@/pages/sell.vue'),
  // },
  // {
  //   path: "/grid",
  //   name: "grid",
  //   component: () => import('@/pages/listing/grid-view/grid.vue'),
  // },
  // {
  //   path: "/grid-sidebar",
  //   name: "grid-sidebar",
  //   component: () => import('@/pages/listing/grid-view/grid-sidebar.vue'),
  // },
  // {
  //   path: "/grid-map",
  //   name: "grid-map",
  //   component: () => import('@/pages/listing/grid-view/grid-map.vue'),
  // },
  // {
  //   path: "/list",
  //   name: "list",
  //   component: () => import('@/pages/listing/list-view/list.vue'),
  // },
  // {
  //   path: "/list-sidebar",
  //   name: "list-sidebar",
  //   component: () => import('@/pages/listing/list-view/list-sidebar.vue'),
  // },
  // {
  //   path: "/list-map",
  //   name: "list-map",
  //   component: () => import('@/pages/listing/list-view/list-map.vue'),
  // },
  // {
  //   path: "/property-detail",
  //   name: "property-details",
  //   component: () => import('@/pages/listing/property-detail/property-detail.vue'),
  // },
  // {
  //   path: "/property-detail/:id",
  //   name: "property-detail",
  //   component: () => import('@/pages/listing/property-detail/property-detail.vue'),
  // },
  // {
  //   path: "/property-detail-two",
  //   name: "property-details-two",
  //   component: () => import('@/pages/listing/property-detail/property-detail-two.vue'),
  // },
  // {
  //   path: "/property-detail-two/:id",
  //   name: "property-detail-two",
  //   component: () => import('@/pages/listing/property-detail/property-detail-two.vue'),
  // },
  // {
  //   path: "/aboutus",
  //   name: "aboutus",
  //   component: () => import('@/pages/pages/aboutus.vue'),
  // },
  // {
  //   path: "/features",
  //   name: "features",
  //   component: () => import('@/pages/pages/features.vue'),
  // },
  // {
  //   path: "/pricing",
  //   name: "pricing",
  //   component: () => import('@/pages/pages/pricing.vue'),
  // },
  // {
  //   path: "/faqs",
  //   name: "faqs",
  //   component: () => import('@/pages/pages/faqs.vue'),
  // },
  // {
  //   path: "/agents",
  //   name: "agents",
  //   component: () => import('@/pages/pages/agents/agents.vue'),
  // },
  // {
  //   path: "/agent-profile",
  //   name: "agent-profiles",
  //   component: () => import('@/pages/pages/agents/agent-profile.vue'),
  // },
  // {
  //   path: "/agent-profile/:id",
  //   name: "agent-profile",
  //   component: () => import('@/pages/pages/agents/agent-profile.vue'),
  // },
  // {
  //   path: "/agencies",
  //   name: "agencies",
  //   component: () => import('@/pages/pages/agencies/agencies.vue'),
  // },
  // {
  //   path: "/agency-profile",
  //   name: "agency-profiles",
  //   component: () => import('@/pages/pages/agencies/agency-profile.vue'),
  // },
  // {
  //   path: "/agency-profile/:id",
  //   name: "agency-profile",
  //   component: () => import('@/pages/pages/agencies/agency-profile.vue'),
  // },
  // {
  //   path: "/auth-login",
  //   name: "auth-login",
  //   component: () => import('@/pages/pages/auth-pages/auth-login.vue'),
  // },
  // {
  //   path: "/auth-signup",
  //   name: "auth-signup",
  //   component: () => import('@/pages/pages/auth-pages/auth-signup.vue'),
  // },
  // {
  //   path: "/auth-re-password",
  //   name: "auth-re-password",
  //   component: () => import('@/pages/pages/auth-pages/auth-re-password.vue'),
  // },
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: () => import('@/pages/pages/utility/terms.vue'),
  // },
  // {
  //   path: "/privacy",
  //   name: "privacy",
  //   component: () => import('@/pages/pages/utility/privacy.vue'),
  // },
  // {
  //   path: "/blogs",
  //   name: "blogs",
  //   component: () => import('@/pages/pages/blog/blogs.vue'),
  // },
  // {
  //   path: "/blog-detail",
  //   name: "blog-details",
  //   component: () => import('@/pages/pages/blog/blog-detail.vue'),
  // },
  // {
  //   path: "/blog-detail/:id",
  //   name: "blog-detail",
  //   component: () => import('@/pages/pages/blog/blog-detail.vue'),
  // },
  // {
  //   path: "/blog-sidebar",
  //   name: "blog-sidebar",
  //   component: () => import('@/pages/pages/blog/blog-sidebar.vue'),
  // },
  // {
  //   path: "/comingsoon",
  //   name: "comingsoon",
  //   component: () => import('@/pages/pages/special-pages/comingsoon.vue'),
  // },
  // {
  //   path: "/maintenance",
  //   name: "maintenance",
  //   component: () => import('@/pages/pages/special-pages/maintenance.vue'),
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: () => import('@/pages/contact.vue'),
  // },
  // {
  //   path: "/:404(.*)",
  //   name: "404",
  //   component: () => import('@/pages/pages/special-pages/404.vue'),
  // },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;