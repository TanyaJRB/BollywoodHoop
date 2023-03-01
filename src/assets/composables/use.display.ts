import { createSharedComposable } from "@vueuse/core";
import { Ref, ref, ShallowRef, shallowRef } from "vue";

const isGalleryOpen = ref(false);

interface useHeaderReturn {
  isGalleryOpen: Ref<boolean>;
  printHeaderExampleFunction: () => void;
}

function useDisplayComposable(): useHeaderReturn {
  function printHeaderExampleFunction(): void {
    console.log("Example");
  }

  return {
    isGalleryOpen,
    printHeaderExampleFunction,
  };
}

const useDisplay = createSharedComposable(useDisplayComposable);
export { useDisplay };
