<template>
  <h2>Text Field</h2>
  <mcw-textfield v-model="text" label="Hint text" />
  <mcw-textfield v-model="text" label="Hint text dense" />
</template>

<script>
export default {
  name: "TextFieldExamples",
  data() {
    return {
      text: "",
    };
  },
};
</script>
