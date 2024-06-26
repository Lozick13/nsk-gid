<script>
import Svg from '@/ui/Svg.vue';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { urlApi } from '@/url.ts';

export default defineComponent({
  components: { Svg },
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const username = ref('');
    const stars = ref(
      Array.from({ length: 5 }, (_, index) =>
        index < props.rating ? 'star' : 'void-star',
      ),
    );

    const getUsername = async () => {
      try {
        const response = await axios.get(`${urlApi}/api/user/id/${props.id}`);
        username.value = response.data.username;
      } catch (error) {
        console.error('Ошибка получения пользователя', error.message);
      }
    };

    getUsername();

    return {
      username,
      stars,
    };
  },
});
</script>

<template>
  <section class="review-card">
    <Svg class="review-card__user" name="user-black"></Svg>
    <div class="review-card__header">
      <h2 class="review-card__name jost-rarefaction color-dark-grey">{{ username }}</h2>
      <div class="review-card__rating">
        <Svg v-for="star in stars" :name="star"></Svg>
      </div>
    </div>
    <span class="jost-set color-dark-grey">{{ text }}</span>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/main';
.review-card {
  border: 2px solid $green;
  padding: 50px 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  &__user {
    width: 60px;
    position: absolute;
    left: 75px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    text-transform: uppercase;
  }
  &__rating {
    display: flex;
    gap: 9px;
  }
}
</style>
