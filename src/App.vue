<script setup lang="ts">
import ToolBar from "@/components/base/toolbar/toolbar.vue";
import { ref, onMounted } from "vue";

import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

const containerRef = ref<HTMLDivElement | null>(null);

const saveOnFocusOut = (e: FocusEvent) => {
  if ((e?.relatedTarget as HTMLElement)?.tagName !== "BUTTON")
    store.pushToStack();
};

const isSpaceKey = ref<boolean>(false);

const recordEvent = (e?: Event) => {
  if ((e as InputEvent).data === " ") {
    if (!isSpaceKey.value) {
      isSpaceKey.value = true;

      store.pushToStack();

      return;
    }
  } else isSpaceKey.value = false;
};

onMounted(() => {
  store.setContainer(containerRef);
  store.pushToStack();
});
</script>

<template>
  <div class="editor">
    <div class="editor__container">
      <tool-bar />
      <div
        id="editable-text"
        ref="containerRef"
        class="editor__content"
        @beforeinput="recordEvent($event)"
        @focusout="saveOnFocusOut"
        contenteditable
      >
        Таким образом консультация с широким активом представляет собой
        интересный эксперимент проверки позиций, занимаемых участниками в
        отношении поставленных задач. С другой стороны постоянное
        информационно-пропагандистское обеспечение нашей деятельности
        представляет собой интересный эксперимент проверки форм развития.
        Идейные соображения высшего порядка, а также укрепление и развитие
        структуры влечет за собой процесс внедрения и модернизации
        соответствующий условий активизации. Задача организации, в особенности
        же реализация намеченных плановых заданий играет важную роль в
        формировании дальнейших направлений развития. Повседневная практика
        показывает, что постоянное информационно-пропагандистское обеспечение
        нашей деятельности играет важную роль в формировании существенных
        финансовых и административных условий.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.editor {
  min-height: 100vh;
  background-color: $surface-primary;
  padding: 77px 100px;

  &__container {
    margin: 0 auto;
    max-width: 800px;

    @include screen-desktop-base {
      max-width: none;
    }
  }

  &__content {
    color: $text-primary;
    outline: none;
    min-height: 400px;
  }

  .img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
  }

  @include screen-tablet {
    padding: 30px 20px;
  }
}
</style>
