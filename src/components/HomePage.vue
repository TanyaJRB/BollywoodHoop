<script setup lang="ts">
// const logoStyleNarrow = {
//   height: "11rem",
//   "margin-bottom": "35rem",
//   "margin-left": "11rem",
// };
</script>

<template>
  <!-- <NavBar class="absolute w-screen z-10"></NavBar> -->
  <div
    class="flex w-full items-center justify-center bg-orange-400 sm:h-screen"
  >
    <img
      src="../assets/photos/CloseUp.jpg"
      class="relative z-0 hidden h-screen w-full object-cover lg:block"
    />
    <div class="absolute inset-0 z-10 m-5 flex items-center justify-center">
      <img
        src="../assets/bollywood-aerialist-logo.png"
        class="hidden pt-80 sm:block"
      />
    </div>

    <!-- MOBILE -->
    <img
      src="../assets/photos/Amazon.jpg"
      class="h-screen w-screen object-cover sm:block lg:hidden"
    />
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <!-- <img
        src="../assets/bollywood-logo-white.png"
        class="w-80 pt-80 sm:hidden"
      /> -->
      <img
        src="../assets/bollywood-aerialist-logo.png"
        class="w-80 pt-80 sm:hidden"
      />
    </div>
  </div>
</template>
