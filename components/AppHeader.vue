<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { activeHeadings, updateHeadings } = useScrollspy();

const hz: string[] = [
  "welcome",
  "philosophy",
  "treatments",
  "location",
  "contact",
];

const activeHeading = ref("");
watch(activeHeadings, (newValue, oldValue) => {
  const wasAdded = newValue.filter((id) => !oldValue.includes(id));
  const wasRemoved = oldValue.filter((id) => !newValue.includes(id));
  if (wasAdded.length > 0) {
    activeHeading.value = wasAdded[0];
  } else if (wasRemoved.length > 0) {
    activeHeading.value = newValue[newValue.length - 1];
  }
});

function isActive(heading: string) {
  return activeHeading.value === heading;
  // const ordered = hz.filter((id) => activeHeadings.value.includes(id));
  // return ordered[0] === heading;
}

const links = computed(() => [
  {
    label: "Philosophy",
    to: "#philosophy",
    active: isActive("philosophy"),
    icon: null,
  },
  {
    label: "Treatments",
    to: "#treatments",
    active: isActive("treatments"),
    icon: null,
  },
  {
    label: "Location",
    to: "#location",
    active: isActive("location"),
    icon: null,
  },
  {
    label: "Contact",
    to: "#contact",
    active: isActive("contact"),
    icon: null,
  },
]);

nuxtApp.hooks.hookOnce("page:finish", () => {
  updateHeadings(hz.map((id) => document.querySelector(`#${id}`)));
});

const linksUi = ref({
  wrapper: "ring-1 ring-primary-300 px-3 gap-x-0 rounded-full",
  base: "py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-[1px] after:inset-x-2 after:h-[2px] after:opacity-0 after:bg-primary-700 dark:after:bg-white after:transition-opacity",
  active: "text-primary-700 after:opacity-100",
  inactive: "text-primary-600 hover:text-primary-600 hover:after:opacity-100",
});
</script>

<template>
  <header class="bg-primary-50 sticky top-0 z-50 py-4 shadow-md">
    <UContainer
      class="flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1">
        <NuxtLink to="/" aria-label="Nena Mager Massage Therapy">
          <img
            src="/images/brand-logo.webp"
            alt="Nena Mager Massage Therapy"
            class="h-24"
          />
        </NuxtLink>
      </div>

      <UHeaderLinks :links="links" class="hidden lg:flex" :ui="linksUi" />

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton
          label="Bookings"
          color="primary"
          variant="solid"
          trailing-icon="i-mdi-arrow-right"
        />
      </div>
    </UContainer>
  </header>
</template>
