<template>
  <h2>Radio</h2>
  <mcw-radio
    id="dog"
    v-model="picked"
    radio-classes="my-radio"
    label="Dog"
    name="pets"
    value="dog"
  ></mcw-radio>
  <mcw-radio
    id="cat"
    v-model="picked"
    label="Cat"
    name="pets"
    value="cat"
  ></mcw-radio>

  <p>Answer: {{ picked }}</p>
</template>

<script>
export default {
  name: "ButtonExamples",
  data() {
    return {
      picked: "dog",
    };
  },
};
</script>
