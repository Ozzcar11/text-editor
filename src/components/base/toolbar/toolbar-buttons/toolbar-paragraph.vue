<script setup lang="ts">
import surroundSelection from "@/utils/surround-selection";

import { UiButton } from "@/components/ui";
import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

const createParagraph = () => {
  const selection: Selection | null = document.getSelection();

  if (selection === null) return alert("Выберите текст");

  surroundSelection("p", selection);
  store.pushToStack();
};
</script>

<template>
  <ui-button icon="low-icon" @click="createParagraph" />
</template>
