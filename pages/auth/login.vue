<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h2 class="title has-text-centered">
              Welcome back!
            </h2>
            <Notification
              v-if="error"
              :message="error"
            />
            <form
              method="post"
              @submit.prevent="login"
            >
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="username"
                    type="email"
                    class="input"
                    name="username"
                  >
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    v-model="password"
                    type="password"
                    class="input"
                    name="password"
                  >
                </div>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="button is-dark is-fullwidth"
                >
                  Log In
                </button>
              </div>
            </form>
            <div
              class="has-text-centered"
              style="margin-top: 20px"
            >
              <p>
                Don't have an account?
                <nuxt-link :to="{ name: 'auth-register' }">
                  Register
                </nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
      error: null
    }
  },
  middleware: "guest",
  methods: {
    async login() {
      try {
        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
        const form = new FormData()
        form.append("username", this.username)
        form.append("password", this.password)
        // await this.$axios.$post("login/access-token", form, config)
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })
        this.$router.push("/")
      } catch (err) {
        // this.error = err.response.data.message
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
