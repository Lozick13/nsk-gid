<script>
import { defineComponent } from 'vue';
import SearchInput from '@/ui/inputs/SearchInput.vue';
import Svg from '@/ui/Svg.vue';
import BaseButton from '@/ui/buttons/BaseButton.vue';

export default defineComponent({
  data() {
    return {
      searchValue: '',
    };
  },
  components: { BaseButton, Svg, SearchInput },
  methods: {
    jumpPage(path) {
      this.$router.replace('/' + path);
    },
    changeSearchValue(value) {
      this.searchValue = value;
    },
    searchPlaces() {
      this.$emit('searchPlaces', this.searchValue);
      this.jumpPage('results');
    },
  },
});
</script>

<template>
  <header class="header bg-dark-grey">
    <div class="header__container">
      <router-link to="/"><Svg name="logo" /></router-link>
      <div class="header__search">
        <SearchInput @updateInput="changeSearchValue"></SearchInput>
        <BaseButton @click="searchPlaces" class="jost-large">Найти</BaseButton>
      </div>
      <div class="header__buttons">
        <BaseButton @click="jumpPage('register')" class="bg-green jost-large"
          >Регистрация</BaseButton
        >
        <BaseButton @click="jumpPage('login')" class="bg-blue jost-large"
          >Войти</BaseButton
        >
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__search {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 50px;
    margin-right: 50px;
  }

  &__container {
    width: 1120px;
    display: flex;
    align-items: center;
    gap: 80px;
  }
  &__buttons {
    display: flex;
    gap: 50px;
  }
}
</style>
