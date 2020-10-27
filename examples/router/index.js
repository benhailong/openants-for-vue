import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

const routes = [
  {
    path: "/",
    component: () => import("../views/Main"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home/Home")
      },
      {
        path: "/DiaLog/Index",
        name: "DiaLogIndex",
        component: () => import("../views/DiaLog/Index")
      },
      {
        path: "/Editor/MyEditor",
        name: "MyEditor",
        component: () => import("../views/Editor/MyEditor")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  routerPush
});

export default router;
