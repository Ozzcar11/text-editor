<script setup lang="ts">
import { computed } from "vue";
import { type ButtonProps, ButtonPropsDefaults } from "./types";
import { useBEMNamespace } from "@/composables/use-BEM-namespace";

import { UiIcon } from "@/components/ui/icon";

const props = withDefaults(defineProps<ButtonProps>(), ButtonPropsDefaults);

const ns = useBEMNamespace("ui-button");

const buttonClasses = computed(() => [
  ns.block(),
  ns.modifier(props.variant),
  ns.is("icon", !!props.icon),
  ns.is("disabled", props.disabled),
]);
</script>

<template>
  <button type="button" :class="buttonClasses" :disabled="disabled">
    <ui-icon v-if="icon" :icon="icon" />
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: none;

  &--text {
    @include text-sm;

    color: $text-primary;
  }
}

.is-icon {
  width: 42px;
  height: 38px;
  border-radius: 4px;
  background-color: $surface-secondary;
}

.is-disabled {
  cursor: default;
  opacity: 0.5;
}
</style>
