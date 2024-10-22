<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import MenuButton from "../icons/MenuButton.vue";
import MenuButtonOpen from "../icons/MenuButton.vue";
import InstagramLogo from "../icons/InstagramLogo.vue";
import InstagramBlack from "../icons/InstagramBlack.vue";
import Email from "../icons/Email.vue";
import { useDisplay } from "../assets/composables/use.display";
import { text } from "stream/consumers";
import NavItem from "./NavItem.vue";
import { useRouter, useRoute, RouteLocationNormalizedLoaded } from "vue-router";

const { openInstagram, emailMe, currentRoute } = useDisplay();

const navClass = computed<string>(() => {
  console.log(currentRoute.value);
  const isHomePageOpen = currentRoute.value == "HomePage";
  const navClass = isHomePageOpen
    ? "absolute z-20 w-screen"
    : "absolute z-20 w-screen bg-stone-800";
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
      <div class="relative flex items-center justify-between">
        <!-- LOGO -->
        <div class="flex flex-shrink-0 items-center">
          <!-- <img
            class="hidden h-24 md:block lg:block"
            src="../assets/svg/nobackground-amazon.png"
            alt="The Bollywood Hoop Artist"
          /> -->
          <img
            class="hidden h-10 md:block lg:block"
            src="../assets/svg/nobackground-amazon-CROPPED.png"
            alt="The Bollywood Hoop Artist"
          />
        </div>

        <div class="flex flex-1 justify-center sm:items-stretch">
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
        <div class="flex hidden flex-shrink sm:block">
          <div class="relative ml-3">
            <div class="flex flex-row">
              <button @click="openInstagram">
                <InstagramLogo class="h-5 w-5 sm:h-6 sm:w-6"></InstagramLogo>
              </button>
              <button @click="emailMe">
                <Email
                  v-if="currentRoute != 'HomePage'"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                ></Email>
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
