<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

const pageTitle = ref("Nena Mager Massage Therapy in Oxford");
const pageDescription = ref(
  "Massage therapy in Oxford. A 360° holistic approach to massage therapy. Book online today."
);

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
});
</script>

<template>
  <div>
    <ULandingHero
      :links="[
        {
          label: 'Online Bookings',
          icon: 'i-heroicons-arrow-right-20-solid',
          trailing: true,
          to: '#features',
          size: 'xl',
          color: 'primary',
        },
      ]"
      :ui="{
        wrapper: `bg-[url('/images/backMassage.webp')] bg-cover bg-center bg-no-repeat`,
        title:
          'text-white font-light !leading-tight text-5xl sm:text-5xl md:text-7xl drop-shadow-lg',
      }"
    >
      <template #title>
        <div id="welcome">
          A 360° approach to<br />
          massage therapy
        </div>
      </template>
    </ULandingHero>

    <ULandingSection
      :ui="{
        base: 'text-left items-start',
        container: 'max-w-3xl mx-auto lg:-translate-x-[10%] gap-8 sm:gap-y-16',
        title:
          'whitespace-pre-line font-extralight uppercase !leading-tight text-slate-700',
      }"
      id="philosophy"
      :title="'Holistic\nMassage\nPhilosophy'"
    >
      <div class="md:flex gap-8 flex-row align-top">
        <div class="flex-shrink-0 float-right ml-4 mb-4 md:float-none md:ml-0">
          <img
            src="/images/nenaProfilePic.webp"
            alt="Nena Mager Avatar"
            class="rounded-full w-32 md:w-48"
          />
        </div>
        <div class="prose">
          <p>
            Based in West Oxford, I'm passionate about providing quality massage
            therapy. Whether it's a full body restoring massage to help unwind
            aching muscles and a tired mind; or a deep tissue sports massage, to
            target specific areas of pain and dysfunction.
          </p>
          <p>
            Whatever your ailment, it's my pleasure to help you. I take a 360°
            holistic approach - not just treating the areas that hurt, but
            working with you to find the root cause.
          </p>
        </div>
      </div>
    </ULandingSection>

    <ULandingSection
      :ui="{
        wrapper: `bg-[url('/images/legMassage.webp')] bg-cover bg-center bg-no-repeat aspect-[2/1] bg-fixed`,
      }"
    />

    <ULandingSection
      title="Treatments"
      id="treatments"
      :ui="{
        title: 'uppercase font-extralight text-slate-700',
      }"
    >
      <MassageList />
    </ULandingSection>

    <ULandingSection
      :ui="{
        wrapper: 'bg-olive-400',
        title: 'text-white font-extralight uppercase',
      }"
      title="Clinic Locations"
      align="left"
    >
      <template #description>
        <div class="bg-blue-100">description</div>
      </template>
      <template #bottom> <div class="bg-blue-100">bottom</div> </template>
      Clinic locations
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
