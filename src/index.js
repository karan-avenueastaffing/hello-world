import HelloWorld from "./components/HelloWorld.vue";

const KaranHelloWorld = {
  install(Vue, options) {
    Vue.component("karan-hello-world", HelloWorld);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(KaranHelloWorld);
}

export default KaranHelloWorld;
