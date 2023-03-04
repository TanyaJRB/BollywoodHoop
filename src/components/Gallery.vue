<script setup lang="ts">
import { ref, watchEffect } from "vue";
import backgroundImageGallery from "/src/assets/wallpaper-fort.jpg";

const backgroundImageUrl = new URL(
  "../assets/wallpaper-fort.jpg",
  import.meta.url
).href;

const imagesNarrow = ref([
  { url: "src/assets/photos/Amazon.jpg", alt: "Img1" },
  { url: "src/assets/photos/WaistBalance.jpg", alt: "Img2" },
  { url: "src/assets/photos/SingleLegTop.jpg", alt: "Img3" },
  { url: "src/assets/photos/StandingPose2.jpg", alt: "Img4" },
  { url: "src/assets/photos/PushAway.jpg", alt: "Img5" },
  { url: "src/assets/photos/StandingPose1.jpg", alt: "Img6" },
  { url: "src/assets/photos/BendyWaist.jpg", alt: "Img7" },
  { url: "src/assets/photos/WineGlass.jpg", alt: "Img8" },
]);

const imagesWide = ref([
  { url: "src/assets/photos/CloseUp.jpg", alt: "Img9" },
  { url: "src/assets/photos/FloorPose.jpg", alt: "Img10" },
  { url: "src/assets/photos/ManInMoon.jpg", alt: "Img10" },
]);
</script>

<template>
  <div
    class="relative z-10 flex h-full max-w-full flex-col justify-center bg-black pt-28"
  >
    <div class="mt-auto flex flex-col justify-center bg-black px-10 sm:px-28">
      <div
        class="grid justify-center gap-2 pb-2 max-[821px]:grid-cols-2 sm:gap-5 sm:pb-5 min-[821px]:grid-cols-4"
      >
        <img
          v-for="image in imagesNarrow"
          :key="image.alt"
          :src="image.url"
          class="w-full rounded border-4 border-white shadow-xl hover:scale-150"
        />
      </div>
      <div
        class="grid justify-center justify-items-center gap-2 pb-10 max-[821px]:grid-cols-1 sm:gap-5 min-[821px]:grid-cols-3"
      >
        <img
          v-for="image in imagesWide"
          :key="image.alt"
          :src="image.url"
          class="w-full rounded border-4 border-white shadow-xl hover:scale-150"
        />
      </div>
    </div>
  </div>
</template>
