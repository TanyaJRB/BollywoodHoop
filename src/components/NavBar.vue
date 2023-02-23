<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import MenuButton from "../icons/MenuButton.vue";
import MenuButtonOpen from "../icons/MenuButton.vue";
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
  <nav class="bg-gray-800">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu(true)"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.
            Menu open: "hidden", Menu closed: "block"
          -->
            <MenuButton></MenuButton>
            <!--
            Icon when menu is open.
            Menu open: "block", Menu closed: "hidden"
          --></button>
        </div>

        <!-- LOGO -->
        <div class="flex flex-shrink-0 items-center">
          <!-- <img
            class="block h-8 w-auto lg:hidden"
            src="../assets/Picture1-removebg-preview.png"
            alt="Your Company"
          /> -->
          <img
            class="hidden h-24 w-auto md:block lg:block"
            src="../assets/Picture2-removebg-preview.png"
            alt="Bollywood Hoop Artist"
          />
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <!-- NAV ITEMS -->

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
                >Dashboard</a
              >

              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Team</a
              >

              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Projects</a
              >

              <a
                href="#"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >Calendar</a
              >
            </div>
          </div>
        </div>

        <!-- PROFILE DROPDOWN -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>

            <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
            <div
              class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              v-if="showProfileMenu"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
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
  <!-- <div class="bg-slate-700">
    <a
      class="text-m px-2 py-2 text-gray-500 hover:text-blue-600 md:px-3 lg:px-6"
    >
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
    </a>
    <a
      class="text-m px-2 py-2 text-gray-500 hover:text-blue-600 md:px-3 lg:px-6"
    >
      <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
    </a>
    <a
      class="text-m px-2 py-2 text-gray-500 hover:text-blue-600 md:px-3 lg:px-6"
    >
      <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
    </a>
    <a
      class="text-m px-2 py-2 text-gray-500 hover:text-blue-600 md:px-3 lg:px-6"
    >
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </a>
  </div> -->
</template>
