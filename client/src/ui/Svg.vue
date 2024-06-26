<script setup>
import { ref, onMounted } from 'vue';

const iconId = ref('');
const size = ref({ width: 0, height: 0 });

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

onMounted(async () => {
  const iconModule = await import(`../assets/svg/${props.name}.svg`);
  console.log(iconModule)
  iconId.value = iconModule.default;
  size.value = { width: iconModule.size.width, height: iconModule.size.height };
});
</script>

<template>
  <svg :width="size.width" :height="size.height">
    <use :href="`#${iconId}`"></use>
  </svg>
</template>
<style scoped></style>
