<template>
  <h1>Vue MDC PoC</h1>
  <MdcExamples />
</template>

<script>
import MdcExamples from "./components/MdcExamples.vue";

export default {
  name: "App",
  components: {
    MdcExamples,
  },
};
</script>

<style lang="scss">
@import "scss/styles.scss";
</style>
