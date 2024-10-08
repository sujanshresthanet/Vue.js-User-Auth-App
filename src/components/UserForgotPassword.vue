<template>
  <div class="container">
    <h2 class="mt-5">Forgot Password</h2>
    <form @submit.prevent="sendResetLink" class="mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Enter your registered email"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Send Reset Link</button>
      <router-link to="/login" class="d-block mt-3">Back to Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    sendResetLink() {
      // Simple validation: check if the email field is filled
      if (!this.email) {
        alert('Please enter your email.');
        return;
      }

      // Check if the email exists in localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === this.email) {
        // Here, you would normally send a reset link via email.
        alert('A password reset link has been sent to your email.');
        this.$router.push('/login'); // Redirect to login page after submission
      } else {
        alert('Email not found. Please check your email address or register.');
      }
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
