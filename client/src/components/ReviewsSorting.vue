<script setup lang="ts">
import VoidButton from '@/ui/buttons/VoidButton.vue';
import Svg from '@/ui/Svg.vue';
</script>

<template>
  <div class="reviews__sorting bg-blue">
    <VoidButton class="jost-button color-dark-grey">
      <Svg name="reviews-arrow"></Svg>
      Сортировка
    </VoidButton>
    <span class="jost-button">4.5/5</span>
  </div>
</template>

<style scoped lang="scss">
.reviews__sorting {
  border-radius: 10px;
  padding: 15px 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
