<script setup lang="ts">
const logoStyleNarrow = {
  height: "11rem",
  "margin-bottom": "35rem",
  "margin-left": "11rem",
};
</script>

<template>
  <div
    class="flex w-full items-center justify-center bg-orange-400 sm:h-screen"
  >
    <img
      src="../assets/Close-up-hoop.jpg"
      class="relative z-0 hidden w-full lg:block"
    />
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <!-- <p class="text-2xl font-bold">The Bollywood Hoop Artist</p> -->
      <img
        src="../assets/bollywood-aerialist-logo.png"
        class="hidden pt-80 sm:block"
      />
    </div>
    <!-- MOBILE -->
    <div class="bg-black">
      <img
        src="../assets/Standingpose-narrow-2.jpg"
        class="h-screen object-none sm:block lg:hidden"
      />
    </div>
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <!-- <p class="text-2xl font-bold">The Bollywood Hoop Artist</p> -->
      <img
        src="../assets/bollywood_aerialist_logo_2.png"
        :style="logoStyleNarrow"
        class="sm:hidden"
      />
    </div>
  </div>
</template>
