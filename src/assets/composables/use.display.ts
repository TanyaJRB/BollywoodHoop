import { createSharedComposable } from "@vueuse/core";
import { Ref, ref } from "vue";

const isHomePageOpen = ref(true);
const activePage = ref("Home");

interface useDisplayReturn {
  openInstagram: () => void;
  emailMe: () => void;
  isHomePageOpen: Ref<boolean>;
  activePage: Ref<string>;
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
    activePage,
  };
}

const useDisplay = createSharedComposable(useDisplayComposable);
export { useDisplay };
