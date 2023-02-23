<template>
  <div class="bg-orange-700">
    <button>
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
    </button>
    <button>
      <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
    </button>
    <button>
      <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
    </button>
    <button>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </button>
  </div>
</template>
