<template>
  <div id="default-layout">
    <navbar-layout :user="user" />
    <router-view />
  </div>
</template>

<script>
import NavbarLayout from "@/layouts/NavbarLayout";
export default {
  name: "DefaultLayout",
  components: {NavbarLayout},
  data(){
    return {
      user: {}
    }
  }
}
</script>

<style lang="scss" scoped>
#default-layout{
  padding-top: 50px;
}
</style>