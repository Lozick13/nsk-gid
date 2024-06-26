<script setup lang="ts"></script>

<template>
  <button><slot></slot></button>
</template>

<style scoped lang="scss">
@import '../../assets/scss/abstracts/variables';
button {
  width: 137px;
  height: 23px;
  background: none;
  border: none;
}
button:hover,
.active {
  background: $green;
}
</style>
