<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import MenuButton from "../icons/MenuButton.vue";
import MenuButtonOpen from "../icons/MenuButton.vue";
import InstagramLogo from "../icons/InstagramLogo.vue";
import InstagramBlack from "../icons/InstagramBlack.vue";
import Email2 from "../icons/Email2.vue";
import { useDisplay } from "../assets/composables/use.display";
import { text } from "stream/consumers";
import NavItem from "./NavItem.vue";
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from "vue-router";

const { openInstagram, emailMe, activePage } = useDisplay();

const navClass = computed<string>(() => {
  const isHomePageOpen = activePage.value == "Home";
  const navClass = isHomePageOpen
    ? "absolute z-20 w-screen"
    : "absolute z-20 w-screen bg-stone-900";
  return navClass;
});

// MOBILE STUFF

const showProfileMenu = ref(false);
const showMobileMenu = ref(false);

function toggleMobileMenu(show: boolean) {
  if (show) {
    showMobileMenu.value = true;
  }
}

const componentWrapperElement = ref<HTMLElement>();
onClickOutside(componentWrapperElement, () => {
  toggleMobileMenu(false);
});
</script>

<template>
  <nav :class="navClass">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-12 items-center justify-between">
        <!-- LOGO -->
        <div class="flex flex-shrink-0 items-center">
          <!-- <img
            class="hidden h-24 md:block lg:block"
            src="../assets/svg/nobackground-amazon.png"
            alt="The Bollywood Hoop Artist"
          /> -->
          <img
            class="hidden h-12 md:block lg:block"
            src="../assets/svg/nobackground-amazon-CROPPED.png"
            alt="The Bollywood Hoop Artist"
          />
        </div>

        <div class="flex flex-1 sm:items-stretch sm:justify-center">
          <!-- NAV ITEMS -->

          <div class="sm:ml-6 sm:block">
            <div class="flex justify-center lg:space-x-6">
              <NavItem
                :router-link-to="'HomePage'"
                :nav-title="'Home'"
              ></NavItem>
              <NavItem
                :router-link-to="'Gallery'"
                :nav-title="'Gallery'"
              ></NavItem>
              <NavItem
                :router-link-to="'Packages'"
                :nav-title="'Packages'"
              ></NavItem>
              <NavItem
                :router-link-to="'Contact'"
                :nav-title="'Contact'"
              ></NavItem>
            </div>
          </div>
        </div>

        <!-- Insta and Email -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="relative ml-3">
            <div class="grid grid-cols-2">
              <button @click="openInstagram">
                <InstagramBlack class="h-6 w-6 sm:h-7 sm:w-7"></InstagramBlack>
              </button>
              <button @click="emailMe">
                <Email2 class="h-4 sm:h-6 sm:w-6"></Email2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->

    <div
      ref="componentWrapperElement"
      class="sm:hidden"
      id="mobile-menu"
      v-if="showMobileMenu"
    >
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
          >Dashboard</a
        >

        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Team</a
        >

        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Projects</a
        >

        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>
