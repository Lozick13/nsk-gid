<script>
import axios from 'axios';
import UserManipulateBlock from '@/blocks/UserManipulateBlock.vue';
import { urlApi } from '@/url.ts';

export default {
  components: { UserManipulateBlock },
  methods: {
    addUser(email, password, name) {
      if (!email || !password || !name) {
        return;
      }

      const newUser = { username: name, email: email, password: password };

      axios.get(`${urlApi}/api/user/email/${email}`).then(response => {
        if (response.data.email) {
          console.log(response.data.email);
          alert('Уже есть пользователь с таким email');
          return;
        }
        axios
          .post(`${urlApi}/api/users`, newUser)
          .then(() => {
            this.$emit('addUser', email, password);
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Ошибка регистрации', error.message);
          });
      });
    },
  },
};
</script>

<template>
  <main>
    <UserManipulateBlock
      @submit="addUser"
      buttonText="Зарегестрироваться"
      title="Регистрация"
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
