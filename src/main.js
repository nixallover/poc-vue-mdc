import { createApp } from "vue";
import App from "./App.vue";
import VueMaterialAdapter from "vue-material-adapter";

export default async function main() {
  const app = createApp(App);
  app.use(VueMaterialAdapter);

  app.mount("#app");
}

main();
