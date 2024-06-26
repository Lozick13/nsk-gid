<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>

<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<style scoped lang="scss">
input {
  width: 350px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}
</style>
