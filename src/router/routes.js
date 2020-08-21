const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }]
  },
  {
    path: "/event",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Event.vue") }]
  },
  {
    path: "/estimate",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Estimate.vue") }]
  },
  {
    path: "/motores",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Motores.vue") }]
  },
  {
    path: "/mypage",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Mypage.vue") }]
  },
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}


export default routes;
