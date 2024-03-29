<template>
  <label :for="id" :class="checkboxContainer">
    <input
      type="checkbox"
      v-model="model"
      :id="id"
      :value="inputValue"
      :checked="checked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      :class="checkboxClass"
    />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: "y-checkbox",
};
</script>
<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  bg: {
    type: Boolean,
    default: false,
  },
  id: null,
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: null,
  },
  outlineColor: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  modelValue: {},
  inputValue: null,
});

const color = ref(props.color);
const outlineColor = ref(props.outlineColor);
const colorHover = ref(`${props.outlineColor}` + 33);

const model = computed({
  cache: false,
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const checkboxContainer = computed(() => {
  return [
    "w-fit",
    "subtitle-4 text-BLACK-2",
    "inline-flex items-center justify-center flex-wrap gap-2",
  ];
});

const checkboxClass = computed(() => {
  return [
    "y-checkbox",
    "appearance-none",
    "bg-white",
    "cursor-pointer",
    "rounded",
    "relative",
    "border-2 border-BORDER",
    "checked:!border-transparent",
    "disabled:hover:cursor-not-allowed",
    "indeterminate:border-0",
    "hover:bg-GREY-2",
    "disabled:border-BORDER",
    "disabled:hover:bg-white",
    "indeterminate:disabled:hover:cursor-not-allowed",
    "bg-no-repeat bg-center",
    {
      "bg-GREY-2": props.bg,
      "checked:!bg-[#eb6363ff] checked:hover:!bg-[#cb1a1a] checked:disabled:!bg-[#cb1a1a] checked:disabled:opacity-50 indeterminate:!bg-[#ff6666] indeterminate:hover:!bg-[#eb6363ff] indeterminate:disabled:opacity-50 indeterminate:disabled:hover:opacity-50":
        props.error && !props.color,
      "checked:!bg-[#3663f2ff] checked:hover:!bg-[#0E3DD3ff] checked:disabled:!bg-[#dae3f1ff] indeterminate:!bg-[#3663f2ff] indeterminate:hover:!bg-[#0E3DD3ff] indeterminate:disabled:!bg-[#d0d3dcff] indeterminate:disabled:hover:bg-[#d0d3dcff]":
        props.primary && !props.color && !props.error,
      "y-checkbox-custom-color indeterminate:disabled:opacity-50 indeterminate:disabled:hover:opacity-50":
        props.color,
      "w-5 h-5": props.size === "lg",
      "w-4 h-4": props.size === "md",
    },
  ];
});
</script>

<style>
.y-checkbox:checked {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M7.32781 0.544271C7.60827 0.817002 7.61453 1.26545 7.3418 1.54591L3.55329 5.44174C3.41845 5.5804 3.23278 5.65789 3.03938 5.65622C2.84598 5.65456 2.66167 5.57389 2.52924 5.43293L0.651083 3.43385C0.383219 3.14875 0.397199 2.70047 0.682309 2.43261C0.967418 2.16474 1.41569 2.17872 1.68356 2.46383L3.0543 3.92282L6.32617 0.55826C6.5989 0.277803 7.04735 0.271539 7.32781 0.544271Z' fill='white'/></svg>");
  background-size: 12px;
}
.y-checkbox:indeterminate {
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg width='8' height='2' viewBox='0 0 8 2' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 1C0 0.585786 0.339555 0.25 0.758417 0.25H7.24158C7.66045 0.25 8 0.585786 8 1C8 1.41421 7.66045 1.75 7.24158 1.75H0.758417C0.339555 1.75 0 1.41421 0 1Z' fill='white'/></svg>");
  background-size: 8px;
}

.y-checkbox-custom-color:checked {
  background-color: v-bind(color);
}

.y-checkbox-custom-color:hover {
  background-color: v-bind(colorHover);
}

.y-checkbox-custom-color:checked:hover {
  background-color: v-bind(color);
}

.y-checkbox-custom-color {
  border-color: v-bind(outlineColor);
}
</style>
