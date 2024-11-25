import { defineStore } from "pinia";

import { ref, type Ref, computed } from "vue";

export const useEventsStackStore = defineStore("eventsStack", () => {
  let container = ref<HTMLDivElement | null>(null);

  const eventsStack = ref<string[]>([]);
  const eventsStackIndex = ref<number>(0);

  const setContainer = (value: Ref<HTMLDivElement | null>) => {
    container = value;
  };

  const getContainer = computed(() => {
    return container;
  });

  const pushToStack = () => {
    if (!lastItemSame()) {
      eventsStackIndex.value++;
      eventsStack.value.splice(eventsStackIndex.value);
      eventsStack.value.push(container!.value!.innerHTML!);
    }
  };

  const lastItemSame = () => {
    return container.value?.innerHTML === eventsStack.value.at(-1);
  };

  return {
    eventsStack,
    eventsStackIndex,
    getContainer,
    setContainer,
    pushToStack,
  };
});
