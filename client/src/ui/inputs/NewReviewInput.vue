<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    updateInput(event) {
      this.$emit('updateInput', event.target.value);
    },
  },
});
</script>

<template>
  <input
    type="text"
    placeholder="Оставьте свой отзыв..."
    class="jost-large color-dark-grey"
    @input="updateInput"
  />
</template>

<style scoped lang="scss">
@import '../../assets/scss/main.scss';
input {
  border: 1px solid $blue;
  padding: 75px;
  width: 1119px;
  height: 179px;
  max-height: 500px;
  &:focus {
    outline: none;
  }
}
</style>
