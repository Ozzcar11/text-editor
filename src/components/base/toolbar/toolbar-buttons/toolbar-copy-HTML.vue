<script setup lang="ts">
import { useEventsStackStore } from "@/store/events-stack";
import { UiButton } from "@/components/ui/button";

const store = useEventsStackStore();

const copyHTML = () => {
  if (store.getContainer.value !== undefined)
    navigator.clipboard.writeText(store.getContainer.value?.innerHTML ?? "");
};
</script>

<template>
  <ui-button @click="copyHTML" variant="text">Скопировать HTML</ui-button>
</template>
