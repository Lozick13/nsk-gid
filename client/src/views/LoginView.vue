<script>
import UserManipulateBlock from '@/blocks/UserManipulateBlock.vue';
import axios from 'axios';
import { urlApi } from '@/url.ts';

export default {
  components: { UserManipulateBlock },
  methods: {
    async login(email, password) {
      await axios
        .get(`${urlApi}/api/user/email/${email}`)
        .then(response => {
          if (response.data.password === password) {
            this.$emit('addUser', email, password);
            console.log('Авторизация прошла успешно');
            this.$router.push('/');
          }
        })
        .catch(error => {
          console.error('Ошибка авторизации', error.message);
          alert('Ошибка авторизации');
        });
    },
  },
};
</script>

<template>
  <main>
    <UserManipulateBlock
      @submit="login"
      buttonText="Войти"
      title="Авторизация"
    ></UserManipulateBlock>
  </main>
</template>

<style scoped lang="scss">
main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
