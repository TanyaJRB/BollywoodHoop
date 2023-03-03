<script setup lang="ts">
import PackageCard from "./PackageCard.vue";
</script>

<template>
  <div
    class="container bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-900 via-amber-800 to-rose-400"
  >
    <div class="grid grid-flow-col justify-center gap-10 px-20 pb-20 pt-32">
      <PackageCard :package-title="'Bronze'" />
      <PackageCard :package-title="'Silver'" />
      <PackageCard :package-title="'Gold'" />
    </div>
  </div>
</template>
