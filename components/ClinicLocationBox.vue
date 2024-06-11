<script setup lang="ts">
defineProps<{
  title: string;
  icon: string;
}>();
</script>

<template>
  <div class="flex gap-4">
    <div><UIcon class="w-9 h-9 flex-shrink-0" :name="icon" /></div>
    <div>
      <div class="font-extralight uppercase text-lg mb-3">{{ title }}</div>
      <div class="prose prose-p:my-1 prose-li:my-0 prose-p:leading-normal">
        <slot />
      </div>
    </div>
  </div>
</template>
