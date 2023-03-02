<script setup lang="ts">
import { ref, watchEffect } from "vue";
import image1 from "../assets/photos/Amazon.jpg";

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
  <div
    class="flex w-full items-center justify-center bg-[url('../assets/wallpaper-fort.jpg')]"
  >
    <img
      src="../assets/wallpaper-fort.jpg"
      class="relative z-0 w-full bg-repeat-x object-cover"
    />
    <div class="container absolute z-10 mt-96 flex flex-col justify-center">
      <div class="flex flex-row justify-center gap-10 pt-40 pb-10">
        <img
          src="../assets/photos/CloseUp.jpg"
          class="w-1/3 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/FloorPose.jpg"
          class="w-1/3 rounded shadow-xl hover:scale-150"
        />
      </div>
      <div class="grid grid-flow-col grid-rows-2 justify-center gap-10">
        <img
          src="../assets/photos/Amazon.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/BendyWaist.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/PushAway.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/StandingPose1.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/StandingPose2.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/WaistBalance.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
        <img
          src="../assets/photos/WineGlass.jpg"
          class="w-60 rounded shadow-xl hover:scale-150"
        />
      </div>
    </div>
  </div>
</template>
