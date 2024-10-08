<template>
  <div class="container">
    <h2 class="mt-5">Login</h2>
    <form @submit.prevent="loginUser" class="mt-4">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <router-link to="/forgot-password" class="d-block mt-3">Forgot Password?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  created() {
    // Redirect to dashboard if user is already logged in
    if (localStorage.getItem('token') === 'test-token-12345') {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    loginUser() {
      // Retrieve the registered user from localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      // Check if the stored user exists and matches the login credentials
      if (
        user &&
        user.username === this.username &&
        user.password === this.password
      ) {
        // If valid, save the token to localStorage
        const testToken = 'test-token-12345';
        localStorage.setItem('token', testToken);
        
        // Redirect to the dashboard
        this.$router.push('/dashboard');
      } // Hardcoded username and password for the example
     else if (this.username === 'user' && this.password === 'password') {

        // If valid, save the token to localStorage
        const testToken = 'test-token-12345';
        localStorage.setItem('token', testToken);

        // Save the token to localStorage
        localStorage.setItem('token', testToken);
        // Redirect to the dashboard
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
