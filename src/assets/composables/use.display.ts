import { createSharedComposable } from "@vueuse/core";
import { Ref, ref, ShallowRef, shallowRef } from "vue";

const isHomePageOpen = ref(true);

interface useDisplayReturn {
  openInstagram: () => void;
  emailMe: () => void;
  isHomePageOpen: Ref<boolean>;
}

function useDisplayComposable(): useDisplayReturn {
  function openInstagram() {
    window.open(
      "https://instagram.com/bollywoodaerialist?igshid=YmMyMTA2M2Y=",
      "_blank"
    );
  }

  function emailMe() {
    window.open("mailto:bollywoodhoop@outlook.com", "_blank");
  }
  return {
    openInstagram,
    emailMe,
    isHomePageOpen,
  };
}

const useDisplay = createSharedComposable(useDisplayComposable);
export { useDisplay };
