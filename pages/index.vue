<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});

const landingHeroUi: any = {
  title: [
    "text-white", // color
    "font-light", // weight
    "!leading-tight", // line height, affected by font size classes
    // font scaling
    "text-5xl",
    "sm:text-5xl",
    "md:text-7xl",
  ].join(" "),
};
</script>

<template>
  <div>
    <ULandingHero
      :description="page.hero.description"
      :links="page.hero.links"
      :ui="{
        ...landingHeroUi,
        wrapper: `bg-[url('/images/backMassage.webp')] bg-cover bg-center bg-no-repeat`,
      }"
    >
      <template #title>
        A 360° approach to<br />
        massage therapy
      </template>
    </ULandingHero>

    <ULandingSection :ui="{ wrapper: 'bg-white' }">
      <div class="max-w-2xl mx-auto lg:ml-48">
        <div
          class="uppercase font-extralight text-3xl md:text-5xl text-slate-700 !leading-tight"
        >
          Holistic<br />
          Massage<br />
          Philosophy
        </div>

        <div class="md:flex mt-8 md:mt-12 gap-8 flex-row align-top">
          <div
            class="flex-shrink-0 float-right ml-4 mb-4 md:float-none md:ml-0"
          >
            <img
              src="/images/nenaProfilePic.webp"
              alt="Nena Mager Avatar"
              class="rounded-full w-32 md:w-48"
            />
          </div>
          <div class="prose">
            <p>
              Based in West Oxford, I'm passionate about providing quality
              massage therapy. Whether it's a full body restoring massage to
              help unwind aching muscles and a tired mind; or a deep tissue
              sports massage, to target specific areas of pain and dysfunction.
            </p>
            <p>
              Whatever your ailment, it's my pleasure to help you. I take a 360°
              holistic approach - not just treating the areas that hurt, but
              working with you to find the root cause.
            </p>
          </div>
        </div>
      </div>
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :headline="page.features.headline"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.pricing.title"
      :description="page.pricing.description"
      :headline="page.pricing.headline"
    >
      <UPricingGrid
        id="pricing"
        compact
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <UPricingCard
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          v-bind="plan"
        />
      </UPricingGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns
        id="testimonials"
        class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection
      class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10"
    >
      <ULandingCTA v-bind="page.cta" :card="false" />
    </ULandingSection>

    <ULandingSection
      id="faq"
      :title="page.faq.title"
      :description="page.faq.description"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6',
            },
          },
        }"
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
