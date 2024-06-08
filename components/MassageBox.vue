<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
<template>
  <ULandingCard
    :title="title"
    :ui="{
      title: 'text-center uppercase font-extralight text-2xl',
      wrapper: 'max-w-md mx-auto',
    }"
  >
    <div class="prose p-2">
      <slot />
    </div>
  </ULandingCard>
</template>
