<script setup lang="ts">
import ContactCard from "./ContactCard.vue";
import emailjs from "emailjs-com";
import { ref } from "vue";

const senderEmail = ref(null);
const senderMessage = ref("");
const senderName = ref("");
const senderPhone = ref("");

const enquirySubmitted = ref(false);

async function sendEnquiry() {
  if (senderEmail.value == null || senderPhone == null) {
    alert(
      "You must provide an email address and phone number to submit an enquiry."
    );
    return;
  }

  const formObject = {
    senderEmail: senderEmail.value,
    senderMessage: senderMessage.value,
    senderPhone: senderPhone.value,
    senderName: senderName.value,
  };

  emailjs
    .send("BollywoodHoop", "template_9b0c5po", formObject, "X8scW6sUVAEqCH1Ap")
    .then(
      (result) => {
        senderEmail.value = null;
        senderName.value = "";
        senderPhone.value = "";
        senderMessage.value = "";
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );

  enquirySubmitted.value = true;
}

const formInputClass =
  "text-sm text-body-color w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus:border-rose-400 focus-visible:shadow-none";
</script>

<template>
  <!-- ====== Contact Section Start -->
  <div
    class="flex min-h-screen w-full overflow-hidden bg-gradient-to-r from-rose-400 to-orange-300 p-14 lg:p-40 lg:py-[120px]"
  >
    <!-- <img
      src="../assets/photos/CloseUp.jpg"
      class="relative inset-0 z-0 object-cover"
    /> -->
    <div class="container mx-auto flex">
      <div class="mt-10 flex flex-wrap lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
            <h2
              class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
            >
              GET IN TOUCH!
            </h2>
            <p class="text-body-color mb-8 text-base leading-relaxed sm:mb-14">
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
          <div class="relative rounded-lg bg-stone-800 p-8 shadow-lg sm:p-12">
            <div v-if="enquirySubmitted" class="py-20 text-white">
              Thanks for your enquiry! We will be in touch.
            </div>
            <form v-else>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  :class="formInputClass"
                  v-model="senderName"
                  name="senderName"
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Email"
                  :class="formInputClass"
                  v-model="senderEmail"
                  name="senderEmail"
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  :class="formInputClass"
                  v-model="senderPhone"
                  name="senderPhone"
                />
              </div>
              <div class="mb-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  :class="formInputClass"
                  v-model="senderMessage"
                  name="senderMessage"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="mr-2 w-full rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
                  @click="sendEnquiry"
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
