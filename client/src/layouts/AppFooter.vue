<script setup lang="ts">
import Svg from '@/ui/Svg.vue';
</script>

<template>
  <footer class="footer bg-dark-grey">
    <div class="footer__container">
      <router-link to="/"><Svg name="logo-big" /></router-link>
      <span class="jost-set color-white">@ НСКГИД 2024</span>
      <p class="jost-set color-white">
        Все права защищены. Все материалы, тексты, изображения и дизайн сайта являются
        собственностью владельца сайта и защищены законом об авторских правах.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 50px 0;
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
}
</style>
