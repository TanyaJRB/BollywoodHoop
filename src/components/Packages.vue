<script setup lang="ts">
import PackageCard from "./PackageCard.vue";
</script>

<template>
  <div
    class="container h-full max-w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800"
  >
    <div
      class="flex justify-center gap-10 px-20 pb-20 pt-32 max-[821px]:flex-col"
    >
      <PackageCard :package-title="'Bronze'" />
      <PackageCard :package-title="'Silver'" />
      <PackageCard :package-title="'Gold'" />
    </div>
  </div>
</template>
