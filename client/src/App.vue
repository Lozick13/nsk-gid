<script>
import { defineComponent } from 'vue';
import HelloHeader from '@/layouts/HelloHeader.vue';
import AppFooter from '@/layouts/AppFooter.vue';
import UserHeader from '@/layouts/UserHeader.vue';
import axios from 'axios';
import searchInput from '@/ui/inputs/SearchInput.vue';
import { urlApi } from '@/url.ts';

export default defineComponent({
  computed: {
    searchInput() {
      return searchInput;
    },
  },
  components: { UserHeader, AppFooter, HelloHeader },
  data() {
    return {
      email: '',
      password: '',
      user: false,
      userId: '',
      searchData: '',
    };
  },
  methods: {
    async addUser(email, password) {
      this.email = email;
      this.password = password;
      this.user = true;

      const response = await axios.get(`${urlApi}/api/user/email/${email}`);
      this.userId = response.data._id;
    },
    logout() {
      this.email = '';
      this.password = '';
    },
    searchPlaces(value) {
      this.searchData = value;
    },
  },
});
</script>

<template>
  <div class="app">
    <HelloHeader @searchPlaces="searchPlaces" v-if="!email && !password"></HelloHeader>
    <UserHeader
      @searchPlaces="searchPlaces"
      @logout="logout"
      v-if="email && password"
    ></UserHeader>
    <router-view
      @addUser="addUser"
      :user="user"
      :userId="userId"
      :searchData="searchData"
    ></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
