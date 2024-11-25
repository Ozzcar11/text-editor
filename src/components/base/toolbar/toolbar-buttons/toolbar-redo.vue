<script setup lang="ts">
import { UiButton } from "@/components/ui";
import { computed } from "vue";
import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

const canRedo = computed(() => {
  return store.eventsStackIndex < store.eventsStack.length - 1;
});

const redoText = () => {
  if (canRedo.value) {
    store.eventsStackIndex++;
    store.getContainer.value!.innerHTML =
      store.eventsStack[store.eventsStackIndex];
  }
};
</script>

<template>
  <ui-button icon="redo-icon" @click="redoText" :disabled="!canRedo" />
</template>
