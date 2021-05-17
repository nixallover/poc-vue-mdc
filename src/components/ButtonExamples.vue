<template>
  <h2>Button</h2>
  <mcw-button :disabled="buttonDisabled">click me</mcw-button>
  <mcw-button raised>
    <mcw-material-icon icon="add"></mcw-material-icon> Button
  </mcw-button>
  <mcw-button outlined trailingIcon="done">Button</mcw-button>
</template>

<script>
export default {
  name: "ButtonExamples",
  data() {
    return {
      buttonDisabled: true,
    };
  },
};
</script>
