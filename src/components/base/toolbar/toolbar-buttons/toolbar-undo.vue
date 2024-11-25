<script setup lang="ts">
import { UiButton } from "@/components/ui";
import { computed } from "vue";
import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

const canUndo = computed(() => {
  return store.eventsStackIndex > 0 && store.eventsStack.length !== 1;
});

const saveInContainer = () => {
  store.getContainer.value!.innerHTML =
    store.eventsStack[store.eventsStackIndex];
};

const undoText = () => {
  if (canUndo.value) {
    if (store.eventsStackIndex === store.eventsStack.length) {
      store.eventsStackIndex -= 2;
      saveInContainer();
      return;
    }
    store.eventsStackIndex--;
    saveInContainer();
  }
};
</script>

<template>
  <ui-button icon="undo-icon" @click="undoText" :disabled="!canUndo" />
</template>
