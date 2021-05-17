<template>
  <ButtonExamples />
  <IconExamples />
  <SelectExamples />
  <RadioExamples />
  <TextFieldExamples />
</template>

<script>
import ButtonExamples from "./ButtonExamples.vue";
import IconExamples from "./IconExamples.vue";
import RadioExamples from "./RadioExamples.vue";
import SelectExamples from "./SelectExamples.vue";
import TextFieldExamples from "./TextFieldExamples.vue";

export default {
  name: "MdcExamples",
  components: {
    ButtonExamples,
    IconExamples,
    RadioExamples,
    SelectExamples,
    TextFieldExamples,
  },
};
</script>
