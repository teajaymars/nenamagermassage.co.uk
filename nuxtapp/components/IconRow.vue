<script lang="ts" setup>
defineProps<{
  icon?: string;
  invertedIcon?: boolean;
}>();
</script>

<template>
  <div class="icon-row">
    <WebpIcon
      v-if="icon"
      class="icon-row__icon"
      :icon="icon"
      :inverted="invertedIcon"
    />
    <div class="content icon-row__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.icon-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  word-break: break-word;
  .icon-row__icon {
    margin-right: 1rem;
    height: auto;
    flex-grow: 0;
    padding-top: 1px;
  }
  .icon-row__content {
    line-height: 1.5;
    // change the spacing between paragraphs
    p {
      margin-bottom: 0.3rem;
    }
    ul {
      margin-top: 0.3rem;
    }
  }
}

.icon-row + .icon-row {
  border-top: 2px solid white;
}
</style>
