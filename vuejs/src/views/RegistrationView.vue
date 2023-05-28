<template>
  <div class="form-wrapper">
    <h3>Регистрация</h3>
    <form @submit.prevent="register" action="">
      <div v-if="errors" class="errors">
        <p v-for="(error, field) in errors" :key="field">
          {{error[0]}}
        </p>
      </div>
      <input type="text" v-model="form.username" placeholder="Ваш логин"><br>
      <input type="password" v-model="form.password" placeholder="Ваш пароль"><br>
      <input type="password" v-model="form.password_repeat" placeholder="Повторите ваш пароль"><br>
      <button>Зарегестрироваться</button>
      <router-link to="/login" class="link">Авторизация</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationView",
  data(){
    return {
      form: {
        username: '',
        password: '',
        password_repeat: ''
      },
      errors: null
    }
  },
}
</script>

<style scoped>

</style>