<script setup lang="ts"></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  border: none;
  padding: 10px 25px;
  border-radius: 10px;
  white-space: nowrap;
}
</style>
