<script>
import BaseButton from '@/ui/buttons/BaseButton.vue';
import CategoriesButton from '@/ui/buttons/CategoriesButton.vue';
import Svg from '@/ui/Svg.vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default defineComponent({
  components: { Svg, BaseButton, CategoriesButton },
  data() {
    return {
      categories: [],
    };
  },
  watch: {
    categoriesProp: {
      immediate: true,
      handler(newVal) {
        this.getCategories();
      },
    },
  },
  methods: {
    async getCategories() {
      try {
        const responses = await Promise.all(
          this.categoriesProp.map(el =>
            axios.get(`${urlApi}/api/categories/${el.category}`),
          ),
        );
        responses.forEach(response => {
          this.categories.push(response.data);
        });
      } catch (error) {
        console.error('Ошибка получения категории', error.message);
      }
    },
    jumpToSite() {
      window.open(this.site);
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    categoriesProp: {
      type: Array,
      required: true,
    },
    site: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <div class="place-main">
    <div class="place-main__header">
      <h1 class="jost-name color-dark-grey">{{ title }}</h1>
      <div class="place-main__categories">
        <CategoriesButton
          v-for="category in categories"
          :key="category._id"
          :title="category.name"
          class="bg-green place-main__category"
        >
          <Svg class="place-main__svg" :name="category.svg_name"></Svg>
        </CategoriesButton>
      </div>
    </div>
    <BaseButton @click="jumpToSite" class="bg-green jost-button"
      >Забронировать</BaseButton
    >
  </div>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/abstracts/variables';
.place-main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  width: 480px;

  &__header {
    display: flex;
    gap: 25px;
    flex-direction: column;
  }
  &__categories {
    display: flex;
    gap: 25px;
  }
  &__category {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
  &__category:nth-of-type(2) {
    background-color: $blue;
  }
  &__category:nth-of-type(3) {
    background-color: $purple;
  }
  &__svg {
    width: 60px;
    height: 60px;
  }
}
</style>
