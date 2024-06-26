<script>
import PlaceCardsBlock from '@/blocks/PlaceCardsBlock.vue';
import SortingBlock from '@/blocks/SortingBlock.vue';
import { defineComponent, watch } from 'vue';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default defineComponent({
  components: { PlaceCardsBlock, SortingBlock },
  data() {
    return {
      places: [],
      sortType: 'rating',
      sortOrder: 'decreasing',
    };
  },
  mounted() {
    this.getPlaces(this.sortType, this.sortOrder);
  },
  methods: {
    getPlaces(sortType, sortOrder) {
      try {
        const url = `${urlApi}/api/places?sortType=${sortType}&sortOrder=${sortOrder}&searchData=${this.searchData}`;
        axios.get(url).then(response => (this.places = response.data));
      } catch (e) {
        console.error('Ошибка отрисовки мест', e.message);
      }
    },
    changeSortType(type) {
      this.sortType = type;
      this.getPlaces(this.sortType, this.sortOrder);
    },
    changeSortOrder(order) {
      this.sortOrder = order;
      this.getPlaces(this.sortType, this.sortOrder);
    },
  },
  props: {
    searchData: {
      type: String,
      default: '',
    },
  },
  watch: {
    searchData: {
      immediate: true,
      handler(newValue) {
        this.getPlaces(this.sortType, this.sortOrder);
      },
    },
  },
});
</script>

<template>
  <main>
    <SortingBlock
      @changeSortType="changeSortType"
      @changeSortOrder="changeSortOrder"
    ></SortingBlock>
    <PlaceCardsBlock :places="places"></PlaceCardsBlock>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 1120px;
  padding: 100px 0;
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
}
</style>
