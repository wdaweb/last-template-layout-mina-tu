/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import "aos/dist/aos.css"; // 引入 AOS 的 CSS 檔案
import AOS from "aos";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

AOS.init();
