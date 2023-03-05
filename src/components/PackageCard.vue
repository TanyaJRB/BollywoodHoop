<script setup lang="ts">
import { ref } from "vue";
import PackageMoreInformation from "./PackageMoreInformation.vue";
import IconClose from "../icons/IconClose.vue";
import.meta.env.BASE_URL;

import CloseUp from "/src/assets/photos/CloseUp.jpg";
import FloorPose from "/src/assets/photos/FloorPose.jpg";
import ManInMoon from "/src/assets/photos/ManInMoon.jpg";

const props = defineProps<{ packageTitle: string }>();

const showMoreInformation = ref(false);

let packageTitleTextColor = "";
let packageText = "";
let packageImgSrc = ManInMoon;

switch (props.packageTitle) {
  case "Bronze":
    packageTitleTextColor = "#b55538";
    packageText = "One choreographed performance during the event.";
    packageImgSrc = CloseUp;
    break;
  case "Silver":
    packageTitleTextColor = "#A2A2A2";
    packageText =
      "One choreographed performance and one ambient set during the event.";
    packageImgSrc = ManInMoon;
    break;
  case "Gold":
    packageTitleTextColor = "#FAAE37";
    packageText =
      "One choreographed performance and two ambient sets (or two performances and one ambient set) during the event.";
    packageImgSrc = FloorPose;
    break;
  default:
    packageTitleTextColor = "white";
    packageText = "";
    break;
}

const packageTitleStyle = {
  color: packageTitleTextColor,
};
</script>

<template>
  <div class="flex justify-center">
    <div
      class="block max-w-sm rounded-lg bg-stone-900 shadow-lg dark:bg-neutral-700"
    >
      <img class="rounded-t-lg" :src="packageImgSrc" alt="" />
      <div class="p-6">
        <h5
          class="mb-2 text-xl font-medium leading-tight text-amber-600 dark:text-neutral-50"
          :style="packageTitleStyle"
        >
          {{ packageTitle }}
        </h5>
        <p class="mb-4 text-base text-neutral-200 dark:text-neutral-200">
          {{ packageText }}
        </p>
        <div class="flex flex-row justify-center">
          <button
            v-if="!showMoreInformation"
            @click="showMoreInformation = true"
            class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 to-red-500 p-0.5 text-sm font-medium text-neutral-200 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800"
          >
            <span
              class="relative rounded-md bg-stone-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
            >
              More Information
            </span>
          </button>
          <!-- <button
            type="button"
            class="mr-2 mb-2 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            More Information
          </button> -->
          <div v-if="showMoreInformation">
            <button @click="showMoreInformation = false" class="text-white">
              <IconClose></IconClose>
            </button>
            <PackageMoreInformation
              :package-title="packageTitle"
            ></PackageMoreInformation>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
