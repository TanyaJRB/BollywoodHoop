<script setup lang="ts">
import { ref } from "vue";
import.meta.env.BASE_URL;

const props = defineProps<{ packageTitle: string }>();

let performanceInformation = "";
let recommendedTimes = new Array();
let addOns = new Array();

const performanceInformationBronze = `
The performance can be at any time during the event.
For a single performance, the recommended points are:`;

const performanceInformationSilverGold = `
The performances can be at any time during the event.
The recommended points are:`;

const recommendedTimesBronze = [
  "During the Dinner Service, after the first course has been cleared",
  "Just before the Dance Performances (Mehndi/Sangeet)",
];

const recommendedTimesSilver = [
  "Ambient set during the Drinks Reception",
  "Performance during the Dinner Service, after the first course has been cleared",
  "Performance just before the Dance Performances (Mehndi/Sangeet)",
];

const recommendedTimesGold = [
  "Ambient set during the Drinks Reception",
  "Ambient set while guests are being seated for Dinner",
  "Ambient set after or before ceremony while guests are waiting for next part of event",
  "Performance during the Dinner Service, after the first course or while the cake is being sliced in kitchen",
  "Performance just before the Dance Performances (Mehndi/Sangeet)",
  "Performance during party portion of the evening mid-way through DJ/dancing",
];

const addOnsBronze = ["Photos with Guests"];

const addOnsSilver = [
  "Custom song choice by Bride & Groom",
  "Custom aesthetic/costume appearance",
  "Photos with Guests",
];

const addOnsGold = [
  "Custom song choice by Bride & Groom",
  "Custom aesthetic/costume appearance",
  "Photos with Guests",
  "Integration with dance performance (sangeet/mehndi)",
  "Further performances at different times",
];

console.log(props.packageTitle);

switch (props.packageTitle) {
  case "Bronze":
    performanceInformation = performanceInformationBronze;
    recommendedTimes = recommendedTimesBronze;
    addOns = addOnsBronze;
    break;
  case "Silver":
    performanceInformation = performanceInformationSilverGold;
    recommendedTimes = recommendedTimesSilver;
    addOns = addOnsSilver;
    break;
  case "Gold":
    performanceInformation = performanceInformationSilverGold;
    recommendedTimes = recommendedTimesGold;
    addOns = addOnsGold;
    break;
  default:
    performanceInformation = performanceInformationSilverGold;
    recommendedTimes = recommendedTimesBronze;
    break;
}
</script>

<template>
  <div class="mt-2 flex flex-col text-xs text-white">
    <p>Full costume, hair and makeup.</p>
    <p>Aerial equipment and rigging materials provided.</p>
    <br />
    <p>{{ performanceInformation }}</p>
    <br />
    <ul
      v-for="item in recommendedTimes"
      :key="item"
      class="ml-3 list-outside list-disc"
    >
      <li>
        {{ item }}
      </li>
    </ul>
    <br />
    <p>Add-ons:</p>
    <br />
    <ul v-for="item in addOns" :key="item" class="ml-3 list-outside list-disc">
      <li>
        {{ item }}
      </li>
    </ul>
  </div>
</template>
