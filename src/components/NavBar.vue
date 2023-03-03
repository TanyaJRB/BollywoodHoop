<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import MenuButton from "../icons/MenuButton.vue";
import MenuButtonOpen from "../icons/MenuButton.vue";
import InstagramLogo from "../icons/InstagramLogo.vue";
import Email from "../icons/Email.vue";
import { useDisplay } from "../assets/composables/use.display";
import { text } from "stream/consumers";

const { openInstagram, emailMe, isHomePageOpen } = useDisplay();

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

const selectedTabClass =
  "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white";

const navFontStyleLarge = {
  "font-family": "Impact",
  color: "red",
};

const navFontStyleSmall = {
  "font-family": "Arial",
  color: "red",
};

// const navItemClass = ():string => {
//     return "sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white";
// }

// const { isGalleryOpen } = useDisplay();
// const textColor = isGalleryOpen ? "white" : "black";

const navFontStyle = {
  //   color: textColor,
  fontFamily: "Helvetica, sans-serif",
};
</script>

<template>
  <nav class="absolute z-20 w-screen">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- LOGO -->
        <div class="flex flex-shrink-0 items-center">
          <!-- <img
            class="block h-8 w-auto lg:hidden"
            src="../assets/Picture1-removebg-preview.png"
            alt="Your Company"
          /> -->
          <img
            class="hidden h-24 md:block lg:block"
            src="../assets/svg/nobackground-amazon.png"
            alt="The Bollywood Hoop Artist"
          />
        </div>

        <div class="flex flex-1 sm:items-stretch sm:justify-center">
          <!-- NAV ITEMS -->

          <div class="sm:ml-6 sm:block">
            <div class="flex justify-center lg:space-x-4">
              <router-link
                :to="{ name: 'HomePage' }"
                class="sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
                :style="navFontStyle"
                >Home</router-link
              >

              <router-link
                :to="{ name: 'Gallery' }"
                class="sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
                :style="navFontStyle"
                >Gallery</router-link
              >

              <router-link
                :to="{ name: 'Packages' }"
                class="sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
                :style="navFontStyle"
                >Packages</router-link
              >

              <router-link
                :to="{ name: 'Contact' }"
                class="sm:text-m rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white"
                :style="navFontStyle"
                >Contact</router-link
              >
            </div>
          </div>
        </div>

        <!-- Insta and Email -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="relative ml-3">
            <div>
              <button @click="openInstagram">
                <InstagramLogo class="h-7 w-7 sm:h-8 sm:w-8"></InstagramLogo>
              </button>
              <button @click="emailMe">
                <Email class="mb-0.5 h-4 sm:mb-1 sm:ml-2 sm:h-6 sm:w-6"></Email>
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
