<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "../assets/composables/use.display";
const props = defineProps<{ routerLinkTo: string; navTitle: string }>();

const { currentRoute } = useDisplay();

const navTextClass = computed<string>(() => {
  const old = "sm:text-m rounded-md px-3 py-3 text-sm font-medium ";
  const baseClass =
    "text-black hover:bg-black hover:text-white font-thin text-xs rounded-md p-2 tracking-widest";
  const homeClass =
    baseClass + " text-black hover:bg-stone-800 hover:text-white";
  const otherPagesClass =
    baseClass + " text-stone-300 hover:bg-stone-300 hover:text-black";

  const activePageClass =
    baseClass +
    " text-white font-medium bg-stone-900 shadow-lg shadow-dark-500/50";
  const isHomePageOpen = currentRoute.value == "HomePage";
  const textClass = isHomePageOpen
    ? homeClass
    : props.navTitle == currentRoute.value
    ? activePageClass
    : otherPagesClass;
  return textClass;
});
</script>

<template>
  <router-link :to="{ name: routerLinkTo }" :class="navTextClass">{{
    navTitle
  }}</router-link>
</template>
