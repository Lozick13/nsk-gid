<script>
import Svg from '@/ui/Svg.vue';
import VoidButton from '@/ui/buttons/VoidButton.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { Svg, VoidButton },
  setup() {
    const currentIndex = ref(0);

    const left = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    const right = () => {
      if (currentIndex.value < 2) {
        currentIndex.value++;
      }
    };

    return {
      currentIndex,
      left,
      right,
    };
  },
});
</script>

<template>
  <div class="carousel">
    <div
      class="carousel__items"
      :style="{ transform: `translateX(-${currentIndex * 500}px)` }"
    >
      <slot></slot>
    </div>
    <VoidButton @click="left" class="carousel__button_left"
      ><Svg name="left-arrow"></Svg
    ></VoidButton>
    <VoidButton @click="right" class="carousel__button_right"
      ><Svg name="right-arrow"></Svg
    ></VoidButton>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  display: flex;
  position: relative;
  align-items: center;
  width: 500px;
  height: 329px;
  overflow: hidden;
  &__button_left {
    position: absolute;
    left: 15px;
  }
  &__button_right {
    position: absolute;
    right: 15px;
  }
  &__items {
    position: absolute;
    display: flex;
    align-items: center;
    transition: transform 0.5s;
  }
}
</style>
