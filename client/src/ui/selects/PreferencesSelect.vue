<script setup lang="ts">
import Svg from '@/ui/Svg.vue';
</script>

<template>
  <div class="select pointer">
    <span class="select__name jost-large color-dark-grey">Тип заведения</span>
    <Svg class="select__arrow" name="select-arrow"></Svg>
    <select class="pointer select__container jost-help color-dark-grey">
      <option value="">Любое</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/abstracts/variables';
.select {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  transition: 0.5s;
  &__name {
    position: absolute;
    top: 17px;
    left: 50px;
    pointer-events: none;
  }
  &__arrow {
    position: absolute;
    right: 50px;
    pointer-events: none;
  }
  &__container {
    width: 100%;
    height: 100%;
    border: 2px solid $purple;
    padding: 44px 50px 15px;
    background: none;
    appearance: none;
  }

  &:hover {
    filter: contrast(50%);
  }
}
</style>
