<script setup lang="ts"></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  border-radius: 10px;
  padding: 10px 0;
  width: 100%;
  border: none;
}
</style>
