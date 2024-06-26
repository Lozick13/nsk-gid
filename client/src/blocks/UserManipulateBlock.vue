<script lang="ts">
import BaseInput from '@/ui/inputs/BaseInput.vue';
import BaseButton from '@/ui/buttons/BaseButton.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  components: { BaseButton, BaseInput },
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  methods: {
    submit() {
      this.$emit('submit', this.email, this.password, this.name);
    },
  },
};
</script>

<template>
  <article class="register">
    <form @submit.prevent>
      <h2 class="jost-name">{{ title }}</h2>
      <div v-if="title === 'Регистрация'" class="register__block">
        <span class="jost-large">Введите ваш никнейм:</span>
        <BaseInput
          :name="name"
          @input="name = $event.target.value"
          type="text"
          placeholder="Иван Иванов"
          required
        ></BaseInput>
      </div>
      <div class="register__block">
        <span class="jost-large">Введите ваш логин:</span>
        <BaseInput
          :email="email"
          @input="email = $event.target.value"
          type="email"
          placeholder="test@test.com"
          required
        ></BaseInput>
      </div>
      <div class="register__block">
        <span class="jost-large">Введите ваш пароль:</span>
        <BaseInput
          :password="password"
          @input="password = $event.target.value"
          type="password"
          placeholder="Str0ngP@ssword123"
          required
        ></BaseInput>
      </div>
      <BaseButton @click="submit" class="jost-large bg-green">{{
        buttonText
      }}</BaseButton>
    </form>
  </article>
</template>

<style scoped lang="scss">
.register {
  border: 2px solid #ccc;
  border-radius: 70px;
  padding: 50px;
  form {
    align-items: center;
    flex-direction: column;
    display: flex;
    gap: 40px;
  }
  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
