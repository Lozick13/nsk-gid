<script setup lang="ts">
import PreferencesSearсh from '@/components/PreferencesSearсh.vue';
</script>

<template>
  <article class="preferences">
    <h1 class="jost-name color-dark-grey">
      Мы - НСКГИД, поможем Вам найти место для проведения своего выходного!
    </h1>
    <PreferencesSearсh></PreferencesSearсh>
  </article>
</template>

<style scoped lang="scss">
.preferences {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}
</style>
