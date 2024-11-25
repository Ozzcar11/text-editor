<script setup lang="ts">
import surroundSelection from "@/utils/surround-selection";

import { UiButton } from "@/components/ui/button";
import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

const createHeadlne = () => {
  const selection: Selection | null = document.getSelection();

  if (selection === null) return alert("Выберите текст");

  if (selection.focusNode?.parentElement?.tagName !== "H1") {
    surroundSelection("h1", selection);
    store.pushToStack();
  } else {
    alert("Выберите другой текст");
  }
};
</script>

<template>
  <ui-button icon="high-icon" @click="createHeadlne" />
</template>
