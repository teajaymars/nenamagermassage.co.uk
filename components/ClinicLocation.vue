<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="bg-olive-500 bg-opacity-50 rounded-xl p-8 flex flex-col gap-6 items-start text-white [&_*]:text-white"
  >
    <div class="text-3xl font-extralight uppercase text-center mb-4">
      {{ title }}
    </div>
    <ClinicLocationBox title="Location" icon="i-heroicons-map-pin">
      <div class="prose">
        <slot name="location" />
      </div>
    </ClinicLocationBox>
    <hr class="border-white opacity-60" />
    <ClinicLocationBox title="Clinic Hours" icon="i-heroicons-calendar">
      <div class="prose">
        <slot name="hours" />
      </div>
    </ClinicLocationBox>
    <hr class="border-white opacity-60" />
    <ClinicLocationBox title="Parking" icon="i-fa6-solid-car">
      <div class="prose">
        <slot name="parking" />
      </div>
    </ClinicLocationBox>
  </div>
</template>
