<script setup lang="ts">
import ContactCard from "./ContactCard.vue";
</script>

<template>
  <!-- ====== Contact Section Start -->
  <div
    class="flex w-full overflow-hidden bg-gradient-to-r from-rose-400 to-orange-300 p-14 lg:p-40 lg:py-[120px]"
  >
    <!-- <img
      src="../assets/photos/CloseUp.jpg"
      class="relative inset-0 z-0 object-cover"
    /> -->
    <div class="container mx-auto flex">
      <div class="-mx-4 flex flex-wrap lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
            <h2
              class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
            >
              GET IN TOUCH!
            </h2>
            <p class="text-body-color mb-14 text-base leading-relaxed">
              Contact me to find out more about packages, rates and
              availability. We can talk through your requirements and see if we
              can create a package bespoke to your needs.
            </p>
            <ContactCard :icon="'phone'"></ContactCard>
            <ContactCard :icon="'email'"></ContactCard>
            <ContactCard :icon="'instagram'"></ContactCard>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="relative rounded-lg bg-zinc-900 p-8 shadow-lg sm:p-12">
            <form>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  class="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  class="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  class="text-body-color focus:border-primary w-full resize-none rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="mr-2 w-full rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
