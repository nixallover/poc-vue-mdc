<template>
  <h2>Select</h2>
  <mcw-select
    :value="selectedType"
    label="Food"
    helptext="Pick a food group"
    leading-icon="restaurant_menu"
    @update:modelValue="onTypeChanged"
  >
    <mcw-list-item
      v-for="type in types"
      :key="type"
      :data-value="type"
      role="option"
      icon
      >{{ type }}</mcw-list-item
    >
  </mcw-select>

  <br />
  <mcw-select
    v-if="selectedType"
    :key="selectedType"
    v-model="selectedValue"
    outlined
    label="Kind"
  >
    <mcw-list-item
      v-for="option of options"
      :key="option"
      :data-value="option.toLowerCase()"
      role="option"
      >{{ option }}</mcw-list-item
    >
  </mcw-select>
  <span>Selected: {{ selectedValue }}</span>
</template>

<script>
export default {
  name: "SelectExamples",
  data() {
    return {
      selectedType: "Vegetables",
      selectedValue: undefined,
      food: {
        Vegetables: ["Spinach", "Carrots", "Onions", "Broccoli"],
        Fruits: ["Apples", "Oranges", "Bananas", "Berries", "Lemons"],
      },
    };
  },
  computed: {
    types() {
      return Object.keys(this.food);
    },
    options() {
      return this.selectedType ? this.food[this.selectedType] : [];
    },
  },
  methods: {
    onTypeChanged(nv) {
      console.log(nv);
      this.selectedType = nv;
      this.selectedValue = null;
    },
    onKindChanged(nv) {
      this.selectedValue = nv;
    },
  },
};
</script>
