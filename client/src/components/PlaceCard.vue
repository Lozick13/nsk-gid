<script>
import CategoriesButton from '@/ui/buttons/CategoriesButton.vue';
import Svg from '@/ui/Svg.vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default defineComponent({
  components: { Svg, CategoriesButton },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
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
  },
  props: {
    title: {
      type: String,
    },
    rating: {
      type: Number,
    },
    categoriesProp: {
      type: Array,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    photo: {
      type: String,
    },
    id: {
      type: String,
    },
  },
});
</script>

<template>
  <router-link
    :to="{
      name: 'place',
      params: { id },
    }"
    ><section class="place-card bg-grey pointer">
      <div class="place-card__header">
        <h2 class="jost-button color-dark-grey">{{ title }}</h2>
        <span class="jost-large color-dark-grey">{{ rating }}/5</span>
      </div>
      <img :src="photo" :alt="title" class="place-card__image" />
      <div class="place-card__categories">
        <CategoriesButton
          v-for="category in categories"
          :key="category._id"
          :title="category.name"
          class="bg-green place-card__category"
        >
          <Svg class="place-card__svg" :name="category.svg_name"></Svg>
        </CategoriesButton>
      </div>
      <p class="place-card__description jost-set color-dark-grey">
        {{ description }}
      </p>
      <div class="place-card__price">
        <span class="jost-large color-dark-grey">Средний чек:</span>
        <span class="jost-set color-dark-grey">{{ price }} р.</span>
      </div>
    </section></router-link
  >
</template>

<style scoped lang="scss">
@import 'src/assets/scss/abstracts/variables';
.place-card {
  border-radius: 20px;
  padding: 25px;
  width: 356px;
  height: 525px;
  display: flex;
  border: 2px solid transparent;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  h2 {
    word-wrap: anywhere;
    width: 228px;
    line-height: 125%;
  }
  &__header,
  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__image {
    border-radius: 10px;
    width: 306px;
    height: 151px;
  }
  &__categories {
    display: flex;
    gap: 25px;
  }
  &__category {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
  }
  &__category:nth-of-type(2) {
    background-color: $blue;
  }
  &__category:nth-of-type(3) {
    background-color: $purple;
  }
  &__svg {
    width: 40px;
    height: 40px;
  }
}
.place-card:hover {
  border-color: black;
}
</style>
