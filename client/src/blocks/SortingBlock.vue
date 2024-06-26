<script>
import VoidButton from '@/ui/buttons/VoidButton.vue';
import Svg from '@/ui/Svg.vue';
import SortingButton from '@/ui/buttons/SortingButton.vue';
import SortingOptionButton from '@/ui/buttons/SortingOptionButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Svg, SortingOptionButton, SortingButton, VoidButton },
  data() {
    return {
      places: [],
      sortType: 'rating',
      sortOrder: 'decreasing',
    };
  },
  methods: {
    changeSortType(type) {
      this.sortType = type;
      this.$emit('changeSortType', this.sortType);
    },
    changeSortOrder(order) {
      this.sortOrder = order;
      this.$emit('changeSortOrder', this.sortOrder);
    },
  },
});
</script>

<template>
  <article class="sorting">
    <div class="sorting__main">
      <VoidButton><Svg name="filter"></Svg></VoidButton>
      <span class="sorting__title color-dark-grey jost-rarefaction">Сортировка</span>
      <div class="sorting__buttons">
        <SortingButton
          @click="changeSortOrder('increasing')"
          class="jost-set"
          :class="{ active: sortOrder === 'increasing' }"
          >↑</SortingButton
        >
        <SortingButton
          @click="changeSortOrder('decreasing')"
          class="jost-set"
          :class="{ active: sortOrder === 'decreasing' }"
          >↓</SortingButton
        >
      </div>
    </div>
    <div class="sorting__option-buttons">
      <SortingOptionButton
        @click="changeSortType('rating')"
        class="jost-set"
        :class="{ active: sortType === 'rating' }"
        >по рейтингу</SortingOptionButton
      >
      <SortingOptionButton
        @click="changeSortType('name')"
        class="jost-set"
        :class="{ active: sortType === 'name' }"
        >по названию</SortingOptionButton
      >
      <SortingOptionButton
        @click="changeSortType('avg_price')"
        class="jost-set"
        :class="{ active: sortType === 'avg_price' }"
        >по среднему чеку</SortingOptionButton
      >
    </div>
  </article>
</template>

<style scoped lang="scss">
.sorting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__main {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  &__title {
    text-transform: uppercase;
  }
  &__option-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5px;
    column-gap: 15px;
  }
}
</style>
