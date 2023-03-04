<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "../assets/composables/use.display";
const props = defineProps<{ routerLinkTo: string; navTitle: string }>();

const textColor = "white";
const navFontStyle = {
  color: textColor,
  fontFamily: "Didot",
  fontWeight: 100,
};

const { activePage } = useDisplay();

function updateActivePage(page: string) {
  activePage.value = page;
  console.log(activePage.value);
}

const navTextClass = computed<string>(() => {
  const old = "sm:text-m rounded-md px-3 py-3 text-sm font-medium ";
  const baseClass =
    "text-black hover:bg-black hover:text-white font-sans font-thin text-xs rounded-md p-2 tracking-widest";
  const homeClass =
    baseClass + " text-black hover:bg-stone-800 hover:text-white";
  const otherPagesClass =
    baseClass + " text-white hover:bg-stone-300 hover:text-black";

  const activePageClass =
    baseClass + " text-white bg-stone-600 shadow-lg shadow-dark-500/50";
  const isHomePageOpen = activePage.value == "Home";
  const textClass = isHomePageOpen
    ? homeClass
    : props.navTitle == activePage.value
    ? activePageClass
    : otherPagesClass;
  return textClass;
});
</script>

<template>
  <router-link
    :to="{ name: routerLinkTo }"
    :class="navTextClass"
    @click="updateActivePage(navTitle)"
    >{{ navTitle }}</router-link
  >
</template>
