import { createSharedComposable } from "@vueuse/core";
import { computed, Ref, ref } from "vue";
import { useRoute } from "vue-router";

interface useDisplayReturn {
  openInstagram: () => void;
  emailMe: () => void;
  currentRoute: Ref<string>;
}

function useDisplayComposable(): useDisplayReturn {
  const router = useRoute();
  const currentRoute = computed<string>(() => router.name as string);

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
    currentRoute,
  };
}

const useDisplay = createSharedComposable(useDisplayComposable);
export { useDisplay };
