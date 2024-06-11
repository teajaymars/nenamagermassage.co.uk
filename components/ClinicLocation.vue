<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="bg-olive-500 bg-opacity-50 rounded-xl p-8 flex flex-col gap-5 items-start text-white [&_*]:text-white"
  >
    <div class="text-3xl font-extralight uppercase text-center mb-2">
      {{ title }}
    </div>
    <ClinicLocationBox title="Location" icon="i-mdi-map-marker">
      <slot name="location" />
    </ClinicLocationBox>
    <UDivider />
    <ClinicLocationBox title="Clinic Hours" icon="i-mdi-calendar-clock">
      <slot name="hours" />
    </ClinicLocationBox>
    <UDivider />
    <ClinicLocationBox title="Parking" icon="i-mdi-car">
      <slot name="parking" />
    </ClinicLocationBox>
  </div>
</template>
