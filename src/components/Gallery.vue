<script setup lang="ts">
import { ref, watchEffect } from "vue";
import backgroundImageGallery from "/src/assets/wallpaper-fort.jpg";

const backgroundImageUrl = new URL(
  "../assets/wallpaper-fort.jpg",
  import.meta.url
).href;

const images = ref([
  { url: "../assets/photos/Amazon.jpg", alt: "Img1" },
  { url: "../assets/photos/BendyWaist.jpg", alt: "Img2" },
  { url: "../assets/photos/CloseUp.jpg", alt: "Img3" },
  { url: "../assets/photos/FloorPose.jpg", alt: "Img4" },
  { url: "../assets/photos/PushAway.jpg", alt: "Img5" },
  { url: "../assets/photos/StandingPose1.jpg", alt: "Img6" },
  { url: "../assets/photos/StandingPose2.jpg", alt: "Img7" },
  { url: "../assets/photos/WaistBalance.jpg", alt: "Img8" },
  { url: "../assets/photos/WineGlass.jpg", alt: "Img9" },
]);
</script>

<template>
  <!-- <div
    class="relative z-0 flex h-screen items-center justify-center bg-repeat"
    :style="{ backgroundImage: `url(${backgroundImageGallery})` }"
  > -->
  <!-- <img
      src="../assets/wallpaper-fort.jpg"
      class="relative z-0 w-full bg-repeat-x object-cover"
    /> -->
  <div class="container absolute z-10 flex flex-col justify-center bg-black">
    <div class="relative z-20 mx-28 mt-28 h-full rounded">
      <div
        class="grid grid-flow-col grid-rows-2 justify-center gap-5 px-5 pt-5 pb-10"
      >
        <img
          src="../assets/photos/Amazon.jpg"
          class="w-60 border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/BendyWaist.jpg"
          class="w-60 border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/PushAway.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/StandingPose1.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/StandingPose2.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/WaistBalance.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/WineGlass.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/SingleLegTop.jpg"
          class="w-60 rounded border-4 border-white shadow-xl hover:scale-150"
        />
      </div>
      <div class="mb-5 flex flex-row justify-center gap-5">
        <img
          src="../assets/photos/CloseUp.jpg"
          class="w-1/3 rounded border-4 border-white shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/FloorPose.jpg"
          class="w-1/3 rounded border-4 border-white shadow-xl hover:scale-150"
        />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
