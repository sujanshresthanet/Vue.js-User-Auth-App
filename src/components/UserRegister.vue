<template>
  <div class="container">
    <h2 class="mt-5">Register</h2>
    <form @submit.prevent="registerUser" class="mt-4">
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
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Enter your email"
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
      <button type="submit" class="btn btn-primary">Register</button>
      <router-link to="/login" class="d-block mt-3">Already have an account? Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    registerUser() {
      // Simple validation: check if the fields are filled
      if (!this.username || !this.email || !this.password) {
        alert('Please fill all fields.');
        return;
      }

      // Create a user object to store in localStorage
      const user = {
        username: this.username,
        email: this.email,
        password: this.password, // In a real application, do not store passwords as plain text
      };

      // Store user information in localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Optionally, redirect to the login page after successful registration
      alert('Registration successful! You can now log in.');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
