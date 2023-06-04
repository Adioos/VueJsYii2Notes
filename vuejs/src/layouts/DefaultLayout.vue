<template>
  <div id="default-layout">
    <navbar-layout :user="user"/>
    <router-view/>
  </div>
</template>

<script>
import NavbarLayout from "@/layouts/NavbarLayout";
import authService from "@/services/auth.service";

export default {
  name: "DefaultLayout",
  components: {NavbarLayout},
  data() {
    return {
      user: {}
    }
  },
  async beforeMount() {
    this.user = await authService.getCurrentUser();
  }
}
</script>

<style lang="scss" scoped>
#default-layout {
  padding-top: 50px;
}
</style>