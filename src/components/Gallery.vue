<script setup lang="ts">
import { ref, watchEffect } from "vue";
import backgroundImageGallery from "/src/assets/wallpaper-fort.jpg";

const backgroundImageUrl = new URL(
  "../assets/wallpaper-fort.jpg",
  import.meta.url
).href;

import amazon from "/src/assets/photos/Amazon.jpg";
import waistBalance from "/src/assets/photos/WaistBalance.jpg";
import singleLegTop from "/src/assets/photos/SingleLegTop.jpg";
import standingpose2 from "/src/assets/photos/StandingPose2.jpg";
import pushAway from "/src/assets/photos/PushAway.jpg";
import standingpose1 from "/src/assets/photos/StandingPose1.jpg";
import BendyWaist from "/src/assets/photos/BendyWaist.jpg";
import WineGlass from "/src/assets/photos/WineGlass.jpg";
import CloseUp from "/src/assets/photos/CloseUp.jpg";
import FloorPose from "/src/assets/photos/FloorPose.jpg";
import ManInMoon from "/src/assets/photos/ManInMoon.jpg";

const imagesNarrow = ref([
  {
    url: amazon,
    alt: "Img1",
  },
  {
    url: waistBalance,
    alt: "Img2",
  },
  {
    url: singleLegTop,
    alt: "Img3",
  },
  {
    url: standingpose2,
    alt: "Img4",
  },
  {
    url: pushAway,
    alt: "Img5",
  },
  {
    url: standingpose1,
    alt: "Img6",
  },
  {
    url: standingpose2,
    alt: "Img7",
  },
  {
    url: WineGlass,
    alt: "Img8",
  },
]);

const imagesWide = ref([
  {
    url: CloseUp,
    alt: "Img9",
  },
  {
    url: FloorPose,
    alt: "Img10",
  },
  {
    url: ManInMoon,
    alt: "Img10",
  },
]);

// const imagesNarrow = ref([
//   {
//     url: new URL("/src/assets/photos/Amazon.jpg", import.meta.url),
//     alt: "Img1",
//   },
//   {
//     url: new URL("/src/assets/photos/WaistBalance.jpg", import.meta.url),
//     alt: "Img2",
//   },
//   {
//     url: new URL("/src/assets/photos/SingleLegTop.jpg", import.meta.url),
//     alt: "Img3",
//   },
//   {
//     url: new URL("/src/assets/photos/StandingPose2.jpg", import.meta.url),
//     alt: "Img4",
//   },
//   {
//     url: new URL("/src/assets/photos/PushAway.jpg", import.meta.url),
//     alt: "Img5",
//   },
//   {
//     url: new URL("/src/assets/photos/StandingPose1.jpg", import.meta.url),
//     alt: "Img6",
//   },
//   {
//     url: new URL("/src/assets/photos/BendyWaist.jpg", import.meta.url),
//     alt: "Img7",
//   },
//   {
//     url: new URL("/src/assets/photos/WineGlass.jpg", import.meta.url),
//     alt: "Img8",
//   },
// ]);

// const imagesWide = ref([
//   {
//     url: new URL("/src/assets/photos/CloseUp.jpg", import.meta.url),
//     alt: "Img9",
//   },
//   {
//     url: new URL("/src/assets/photos/FloorPose.jpg", import.meta.url),
//     alt: "Img10",
//   },
//   {
//     url: new URL("/src/assets/photos/ManInMoon.jpg", import.meta.url),
//     alt: "Img10",
//   },
// ]);
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
