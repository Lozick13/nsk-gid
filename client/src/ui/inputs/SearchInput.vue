<script>
import { defineComponent } from 'vue';
import Svg from '@/ui/Svg.vue';

export default defineComponent({
  components: { Svg },
  methods: {
    updateInput(event) {
      this.$emit('updateInput', event.target.value);
    },
  },
});
</script>

<template>
  <div class="search">
    <Svg name="search"></Svg>
    <input @input="updateInput" class="search__input jost-large" placeholder="Найти..." />
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/scss/abstracts/variables';
.search {
  background-color: $grey;
  display: flex;
  height: 52px;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  width: 100%;

  &__input {
    background-color: $grey;
    padding: 0;
    border: none;
    width: 100%;
  }
  &__input:focus {
    outline: none;
  }
}
</style>
