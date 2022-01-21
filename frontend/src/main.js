import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/scss/app.scss";
import store from "@/store";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);
app.use(store);
app.mount("#app");
