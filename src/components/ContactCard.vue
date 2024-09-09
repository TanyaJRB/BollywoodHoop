<script setup lang="ts">
import IconPhone from "../icons/IconPhone.vue";
import Email2 from "../icons/Email2.vue";
import InstagramBlack from "../icons/InstagramBlack.vue";
import { useDisplay } from "../assets/composables/use.display";

const { openInstagram, emailMe } = useDisplay();

const props = defineProps<{ icon: string }>();

let cardText = "";
let cardTitle = "";

switch (props.icon) {
  case "phone":
    cardTitle = "Phone / Whatsapp";
    cardText = "Please email for Whatsapp.";
    break;
  case "email":
    cardTitle = "Email";
    cardText = "bollywoodhoop@outlook.com";
    break;
  case "instagram":
    cardTitle = "Instagram";
    cardText = "@bollywoodaerial";
    break;
}
</script>

<template>
  <div class="mb-1 flex h-14 w-4/5 flex-row sm:h-20 sm:w-2/3">
    <IconPhone v-if="icon == 'phone'" class="h-1/3 w-1/3"></IconPhone>
    <Email2
      v-if="icon == 'email'"
      class="h-1/3 w-1/3 hover:cursor-pointer"
      @click="emailMe"
    ></Email2>
    <InstagramBlack
      v-if="icon == 'instagram'"
      class="h-1/3 w-1/3 hover:cursor-pointer"
      @click="openInstagram"
    ></InstagramBlack>
    <div class="w-2/3">
      <h4 class="text-dark mb-1 text-sm sm:block sm:text-xl">
        {{ cardTitle }}
      </h4>
      <p class="text-body-color sm-text-xl text-base text-sm font-bold">
        {{ cardText }}
      </p>
    </div>
  </div>
</template>
