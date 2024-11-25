<script setup lang="ts">
import ToolBarUndo from "./toolbar-buttons/toolbar-undo.vue";
import ToolBarRedo from "./toolbar-buttons/toolbar-redo.vue";
import ToolBarHeadline from "./toolbar-buttons/toolbar-headline.vue";
import ToolBarParagraph from "./toolbar-buttons/toolbar-paragraph.vue";
import ToolBarInsertImage from "./toolbar-buttons/toolbar-insert-image.vue";
import ToolBarCopyHTML from "./toolbar-buttons/toolbar-copy-HTML.vue";
</script>

<template>
  <div class="tool-bar">
    <tool-bar-undo />
    <tool-bar-redo />
    <tool-bar-headline />
    <tool-bar-paragraph />
    <tool-bar-insert-image />
    <tool-bar-copy-HTML />
  </div>
</template>

<style lang="scss">
.tool-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 30px;
  gap: 12px;
}
</style>
