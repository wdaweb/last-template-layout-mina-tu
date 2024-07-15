/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from "./vuetify";
import router from "@/router";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import anime from "animejs/lib/anime.es.js";

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(AOS).use(gsap).use(anime);
}
