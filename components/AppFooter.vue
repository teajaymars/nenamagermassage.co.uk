<script setup lang="ts">
const links = [
  {
    label: "Resources",
    children: [
      {
        label: "Help center",
      },
      {
        label: "Docs",
      },
      {
        label: "Roadmap",
      },
      {
        label: "Changelog",
      },
    ],
  },
  {
    label: "Features",
    children: [
      {
        label: "Affiliates",
      },
      {
        label: "Portal",
      },
      {
        label: "Jobs",
      },
      {
        label: "Sponsors",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "About",
      },
      {
        label: "Pricing",
      },
      {
        label: "Careers",
      },
      {
        label: "Blog",
      },
    ],
  },
];

const toast = useToast();

const email = ref("");
const loading = ref(false);

function onSubmit() {
  loading.value = true;

  setTimeout(() => {
    toast.add({
      title: "Subscribed!",
      description: "You've been subscribed to our newsletter.",
    });

    loading.value = false;
  }, 1000);
}
</script>

<template>
  <div class="bg-neutral-500 p-16 align-items-top">
    <UContainer class="flex flex-col lg:flex-row gap-16">
      <div class="flex-1 [&_*]:text-white">
        <h3 class="text-3xl md:text-5xl uppercase font-extralight">
          Get In Touch
        </h3>
        <div class="mt-16 flex flex-col gap-4 w-96">
          <ContactBox
            text="@nenamager_massagetherapy"
            href="https://www.instagram.com/nenamager_massagetherapy"
            icon="i-mdi-instagram"
          />
          <UDivider />
          <ContactBox
            text="07860 639758"
            href="https://wa.me/447860639758?text=Hi%20Nena%2C%20I%27d%20like%20to%20book%20a%20massage."
            icon="i-mdi-whatsapp"
          />
          <UDivider />
          <ContactBox
            text="hello@nenamagermassage.co.uk"
            href="mailto:hello@nenamagermassage.co.uk"
            icon="i-mdi-email"
          />
        </div>
      </div>
      <div class="max-w-64">
        <InstagramEmbed />
      </div>
    </UContainer>
  </div>
</template>
