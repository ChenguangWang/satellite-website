import "@/assets/main.css";
import "@/assets/css.css";
import "@/assets/css1.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router).use(Antd);

app.mount("#app");
