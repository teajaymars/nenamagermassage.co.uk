<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

const hz: string[] = [
  "welcome",
  "philosophy",
  "treatments",
  "testimonials",
  "faq",
];

function isActive(heading: string) {
  const ordered = hz.filter((id) => activeHeadings.value.includes(id));
  return ordered[0] === heading;
}

const links = computed(() => [
  {
    label: "Philosophy",
    to: "#philosophy",
    icon: "i-heroicons-cube-transparent",
    active: isActive("philosophy"),
  },
  {
    label: "Treatments",
    to: "#treatments",
    icon: "i-heroicons-credit-card",
    active: isActive("treatments"),
  },
  {
    label: "Testimonials",
    to: "#testimonials",
    icon: "i-heroicons-academic-cap",
    active: isActive("testimonials"),
  },
  {
    label: "FAQ",
    to: "#faq",
    icon: "i-heroicons-question-mark-circle",
    active: isActive("faq"),
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings(hz.map((id) => document.querySelector(`#${id}`)));
});
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img
        src="/images/brand-logo.webp"
        alt="Nena Mager Massage Therapy"
        class="h-24"
      />
    </template>

    <template #right>
      <UButton
        label="Bookings"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>
</template>
