import { createApp } from "vue";
import App from "./App.vue";

export default async function main() {
  const app = createApp(App);

  app.mount("#app");
}

main();
