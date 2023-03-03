<script setup lang="ts">
import { useDisplay } from "../assets/composables/use.display";
const props = defineProps<{ routerLinkTo: string; navTitle: string }>();
const textColor = "white";
const navFontStyle = {
  color: textColor,
  fontFamily: "Helvetica, sans-serif",
};

const { activePage } = useDisplay();

function updateActivePage(page: string) {
  activePage.value = page;
}
</script>

<template>
  <router-link
    :to="{ name: routerLinkTo }"
    class="sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
    :style="navFontStyle"
    @click="updateActivePage(navTitle)"
    >{{ navTitle }}</router-link
  >
</template>
