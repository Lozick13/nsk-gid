<script>
import PlaceCard from '@/components/PlaceCard.vue';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  components: { PlaceCard },
  props: {
    places: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <article class="place-cards">
    <PlaceCard
      v-for="place in places"
      :key="place._id"
      :id="place._id"
      :title="place.name"
      :price="place.avg_price"
      :description="place.address"
      :photo="place.photos[0].url"
      :categoriesProp="place.categories"
      :rating="place.rating"
    ></PlaceCard>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/scss/abstracts/variables';
.place-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  row-gap: 50px;
}
</style>
