<script setup lang="ts">
defineProps<{
  price: number;
  mins: number;
}>();
</script>
<template>
  <div class="text-center text-gray-900 text-xl">
    <span class="w-24 inline-block text-right">{{ mins }} mins</span>
    <span class="px-2 opacity-50">&bull;</span>
    <span class="w-16 inline-block text-left">
      <span class="text-sm opacity-80 pr-1">&pound;</span>{{ price }}
    </span>
  </div>
</template>
