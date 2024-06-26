<script>
import Svg from '@/ui/Svg.vue';
import NewReviewInput from '@/ui/inputs/NewReviewInput.vue';
import MinimalButton from '@/ui/buttons/MinimalButton.vue';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default {
  components: { MinimalButton, Svg, NewReviewInput },
  data() {
    return {
      svgNames: [
        'big-void-star',
        'big-void-star',
        'big-void-star',
        'big-void-star',
        'big-void-star',
      ],
      starsActive: false,
      text: '',
    };
  },
  methods: {
    changeName(index, newName) {
      if (!this.starsActive) {
        for (let i = 0; i <= index; i++) {
          this.svgNames[i] = newName;
        }
      }
    },
    changeStarsActive() {
      this.starsActive = !this.starsActive;
    },
    countStars() {
      return this.svgNames.filter(name => name === 'big-star').length;
    },
    async sendReview() {
      if (!this.user) {
        alert('Войдите в свой аккаунт');
        return;
      }
      if (this.countStars() === 0) {
        alert('Выберите рейтинг');
        return;
      }

      try {
        await axios.post(`${urlApi}/api/place/${this.id}`, {
          id: this.userId,
          text: this.text,
          rating: this.countStars(),
        });
        this.$emit('restartReviews');
      } catch (error) {
        console.error('Ошибка отрисовки места', error.message);
      }
    },
    getText(text) {
      this.text = text;
    },
  },
  props: {
    user: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <article class="new-review">
    <div class="new-review__header">
      <div class="new-review__rating">
        <div
          v-for="(name, index) in svgNames"
          :key="index"
          class="star-container"
          @mouseover="changeName(index, 'big-star')"
          @mouseleave="changeName(index, 'big-void-star')"
          @click="changeStarsActive"
        >
          <Svg class="pointer star-container__star" name="big-star"></Svg>
          <Svg
            v-if="name === 'big-void-star'"
            class="pointer star-container__star star-container__star_void"
            name="big-void-star"
          ></Svg>
        </div>
      </div>
      <span class="new-review__rating-count jost-button color-dark-grey"
        >{{ countStars() }}/5</span
      >
    </div>
    <NewReviewInput @updateInput="getText"></NewReviewInput>
    <MinimalButton
      class="new-review__button jost-large color-dark-grey"
      @click="sendReview"
      >Оставить отзыв</MinimalButton
    >
  </article>
</template>

<style scoped lang="scss">
@import 'src/assets/scss/abstracts/variables';
.new-review {
  display: flex;
  flex-direction: column;
  gap: 50px;
  &__header {
    display: flex;
    gap: 50px;
    align-items: center;
    height: 56px;
  }
  &__rating {
    display: flex;
  }
  &__button {
    border-color: $blue;
  }
}
.star-container {
  width: 58px;
  height: 56px;
  box-sizing: content-box;
  padding: 0 9px;
  &__star {
    z-index: 0;
    position: absolute;
  }
  &__star_void {
    z-index: 1;
  }
}
</style>
