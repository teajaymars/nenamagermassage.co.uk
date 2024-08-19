<script setup lang="ts">
defineProps<{
  text: string;
  href: string;
  icon: string;
}>();
</script>

<template>
  <div>
    <div class="flex gap-4 items-center">
      <UIcon class="w-9 h-9 flex-shrink-0 block" :name="icon" />
      <a
        :href="href"
        target="_blank"
        class="mb-1 text-lg hover:underline leading-normal"
        >{{ text }}</a
      >
    </div>
    <div class="content mt-2 text-sm">
      <slot />
    </div>
  </div>
</template>
