/**
 * Created by J.2ue on 2017/9/16.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router-list";

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes
});
