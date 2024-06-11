<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-8">
    <MassageBox title="First Appointment">
      <p>An initial consultation is essential if you haven't seen me before.</p>
      <p>
        We will do a head-to-toe postural assessment, joint assessment and any
        special tests as required, to allow us to create a plan tailored to your
        specific needs.
      </p>
      <p>We will also begin treatment in your first session.</p>
      <p>The first step to a more flexible, relaxed and revitalised you!</p>
      <MassagePrice :price="70" :mins="60" />
    </MassageBox>
    <div class="flex flex-col lg:flex-row gap-8 justify-center">
      <MassageBox title="Sports/Deep Tissue Massage" class="lg:mx-0">
        <p>
          For those seeking treatment for anything from sports injury, soft
          tissue dysfunction, or everyday aches and pains from the stresses of
          the day. Includes consultation, assessment and treatment.
        </p>
        <p>
          The aim is to address the root cause of your pain; this will be done
          through the assessment process. Treatment will seek out knots and
          areas of tightness, aid joint mobility and restore your range of
          movement.
        </p>
        <p>
          Along with massage, I use a combination of techniques targeted to suit
          your specific needs. These include Soft Tissue and Myofascial Release,
          Muscle Energy and Neuromuscular Techniques.
        </p>
        <MassagePrice :price="40" :mins="30" />
        <div class="text-xs opacity-70 text-gray-900 mt-px text-center">
          (Available for existing clients)
        </div>
        <MassagePrice :price="70" :mins="60" class="mt-2" />
        <MassagePrice :price="100" :mins="90" class="mt-2" />
      </MassageBox>
      <MassageBox title="Relaxing Massage" class="lg:mx-0">
        <p>For those who just want to unwind.</p>
        <p>After a short consultation, you can choose from either:</p>
        <ul>
          <li>Full body</li>
          <li>Back, neck and shoulders</li>
          <li>Full legs and lower back</li>
        </ul>
        <p>
          Each massage is tailored to suit you, with more detailed focus on a
          specific area if required.
        </p>
        <p>
          I use a range of therapeutic massage strokes to relax sore and aching
          muscles, boost circulation and cruicially, help you achieve some
          quality ‘you’ time. You will leave feeling thoroughly refreshed, and
          ready to take on the world!
        </p>
        <MassagePrice :price="70" :mins="60" />
      </MassageBox>
    </div>
  </div>
</template>
