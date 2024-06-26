<script lang="ts">
import PreferencesSelect from '@/ui/selects/PreferencesSelect.vue';
import PreferencesButton from '@/ui/buttons/PreferencesButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { PreferencesButton, PreferencesSelect },
  methods: {
    jumpPage(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<template>
  <div class="preferences-search">
    <!--    <div class="preferences-search__selects">-->
    <!--      <PreferencesSelect></PreferencesSelect>-->
    <!--      <PreferencesSelect></PreferencesSelect>-->
    <!--      <PreferencesSelect></PreferencesSelect>-->
    <!--    </div>-->
    <PreferencesButton
      @click="jumpPage('results')"
      class="bg-purple color-white jost-button"
      >Приступим!</PreferencesButton
    >
  </div>
</template>

<style scoped lang="scss">
.preferences-search {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  &__selects {
    display: flex;
    gap: 10px;
    width: 100%;
  }
}
</style>
