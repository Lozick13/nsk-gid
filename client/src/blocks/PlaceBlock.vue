<script>
import { defineComponent } from 'vue';
import PlaceCarousel from '@/components/PlaceCarousel.vue';
import PlaceMain from '@/components/PlaceMain.vue';

export default defineComponent({
  components: { PlaceMain, PlaceCarousel },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    contacts: {
      type: String,
      required: true,
    },
    photos: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <article class="place">
    <div class="place__block">
      <PlaceCarousel>
        <img v-for="photo in photos" :src="photo.url" alt="" />
      </PlaceCarousel>
      <PlaceMain :site="site" :categoriesProp="categories" :title="title"></PlaceMain>
    </div>
    <div class="place__info">
      <p class="jost-large">Cредняя цена: {{ price }}р.</p>
      <p class="jost-large">Часы: {{ hours }}</p>
      <p class="jost-large">Адресс: {{ address }}</p>
      <p class="jost-large">
        {{ description }}
      </p>
      <p class="jost-large">Контакты: {{ contacts }}</p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.place {
  display: flex;
  flex-direction: column;
  gap: 75px;

  &__block {
    display: flex;
    justify-content: space-between;

    img {
      width: 500px;
      height: 329px;
      border-radius: 30px;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    gap: 35px;
    flex-direction: column;
  }
}
</style>
