<script setup lang="ts">
import inEditableContainer from "@/utils/in-editable-container";

import { UiButton } from "@/components/ui/button";
import { useEventsStackStore } from "@/store/events-stack";

const store = useEventsStackStore();

function isImage(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

const insertImage = async () => {
  const selection = document.getSelection();

  if (selection === null) return alert("Выберите текст");

  if (selection?.anchorNode === null || inEditableContainer(selection))
    return alert("Выберите место вставки");

  const imgSrc = prompt("Введите URL изображения");

  if (imgSrc === null) return alert("Заполните поле");

  const valid = await isImage(imgSrc);

  if (!valid) return alert("Некорректная ссылка");

  const img = document.createElement("img");
  img.setAttribute("src", new URL(imgSrc).href);
  img.classList.add("img");

  selection?.getRangeAt(0).insertNode(img);
  selection?.empty();
  store.pushToStack();
};
</script>

<template>
  <ui-button icon="image-icon" @click="insertImage" />
</template>
