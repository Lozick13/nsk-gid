<script setup lang="ts"></script>

<template>
  <button><slot></slot></button>
</template>

<style scoped lang="scss">
@import '../../assets/scss/abstracts/variables';
button {
  border: 2px solid $blue;
  padding: 0 15px;
  background: none;
}
.active {
  border: 2px solid $blue;
  padding: 0 15px;
  background: $blue;
}
</style>
