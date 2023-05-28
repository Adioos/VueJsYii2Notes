<template>
  <div>
    <div class="form-wrapper">
      <h3>Авторизация</h3>
      <form @submit.prevent="login" action="">
        <div v-if="errors" class="errors">
          <p v-for="(error, field) in errors" :key="field">
            {{error[0]}}
          </p>
        </div>
        <input type="text" v-model="form.username" placeholder="Ваш логин"><br>
        <input type="password" v-model="form.password" placeholder="Ваш пароль"><br>
        <button>Авторизоваться</button>
        <router-link to="/register" class="link">Регистрация</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data(){
    return {
      form: {
        username: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    login(){
      console.log("Login", this.form);
    }
  }
}
</script>

<style scoped>

</style>