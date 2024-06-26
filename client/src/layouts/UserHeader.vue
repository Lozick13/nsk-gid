<script>
import Svg from '@/ui/Svg.vue';
import SearchInput from '@/ui/inputs/SearchInput.vue';
import BaseButton from '@/ui/buttons/BaseButton.vue';
import VoidButton from '@/ui/buttons/VoidButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Svg, BaseButton, SearchInput },
  methods: {
    logout() {
      this.$emit('logout');
      this.$router.push('/');
    },
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
      <BaseButton @click="logout" class="jost-large">Выход</BaseButton>
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
  &__container {
    width: 1120px;
    display: flex;
    align-items: center;
    gap: 80px;
  }
  &__search {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 50px;
    margin-right: 50px;
  }
}
.user {
  width: 55px;
  height: 55px;
  transition: 0.5s;
}
.user:hover {
  filter: contrast(50%);
  transition: 0.5s;
}
</style>
