<script lang="ts" setup>
import { type IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  icon: "",
});
</script>

<template>
  <div class="ui-icon">
    <component :is="props.icon" />
  </div>
</template>

<style lang="scss">
.ui-icon {
  width: 28px;
  height: 28px;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
