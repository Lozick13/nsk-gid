<script>
import { defineComponent, onMounted, ref } from 'vue';
import PlaceBlock from '@/blocks/PlaceBlock.vue';
import ReviewCard from '@/components/ReviewCard.vue';
import NewReviewBlock from '@/blocks/NewReviewBlock.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default defineComponent({
  setup() {
    const route = useRoute();
    const id = ref('');
    const name = ref('');
    const address = ref('');
    const description = ref('');
    const hours = ref('');
    const contact_info = ref('');
    const avg_price = ref('');
    const reviews = ref([]);
    const photos = ref([]);
    const categories = ref([]);
    const site = ref([]);

    onMounted(async () => {
      try {
        const response = await axios.get(`${urlApi}/api/place/${route.params.id}`);
        const placeData = response.data;

        id.value = route.params.id;
        name.value = placeData.name;
        address.value = placeData.address;
        description.value = placeData.description;
        hours.value = placeData.hours;
        contact_info.value = placeData.contact_info;
        avg_price.value = placeData.avg_price;
        reviews.value = placeData.reviews;
        photos.value = placeData.photos;
        categories.value = placeData.categories;
        site.value = placeData.site;
      } catch (error) {
        console.error('Ошибка отрисовки места', error.message);
      }
    });

    return {
      id,
      name,
      address,
      description,
      hours,
      contact_info,
      avg_price,
      reviews,
      photos,
      categories,
      site,
    };
  },

  components: { NewReviewBlock, ReviewCard, PlaceBlock },
  props: {
    user: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async restartReviews() {
      try {
        const response = await axios.get(`${urlApi}/api/place/${this.id}`);
        const placeData = response.data;
        this.reviews = placeData.reviews.map(review => ({
          ...review,
          key: Math.random().toString(36).substring(7),
        }));
      } catch (error) {
        console.error('Ошибка обновления отзывов', error.message);
      }
    },
  },
});
</script>

<template>
  <main>
    <PlaceBlock
      :title="this.name"
      :photos="this.photos"
      :contacts="this.contact_info"
      :hours="this.hours"
      :address="this.address"
      :price="this.avg_price"
      :description="this.description"
      :categories="this.categories"
      :site="this.site"
    ></PlaceBlock>
    <ReviewCard
      v-for="review in reviews"
      :id="review.user_id"
      :text="review.text"
      :rating="review.rating"
      :key="'review-' + review.user_id"
    ></ReviewCard>
    <NewReviewBlock
      @restartReviews="restartReviews"
      :id="id"
      :user="user"
      :userId="userId"
    ></NewReviewBlock>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 1120px;
  padding: 100px 0;
  display: flex;
  gap: 75px;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
}
</style>
