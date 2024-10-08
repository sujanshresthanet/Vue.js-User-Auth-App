<template>
  <div class="container">
    <h2 class="mt-5">User Profile</h2>
    <form @submit.prevent="updateProfile" class="mt-4">
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
          placeholder="Enter your new password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Update Profile</button>
      <router-link to="/dashboard" class="d-block mt-3">Back to Dashboard</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  created() {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login'); // Redirect to login if not logged in
    } else {
      // Retrieve user data from localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      this.email = user ? user.email : ''; // Set the email or default to empty
      this.password = user ? user.password : ''; // Set the password or default to empty
    }
  },
  methods: {
    updateProfile() {
      // Retrieve user data from localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      // Update user data
      if (user) {
        user.email = this.email;
        user.password = this.password; // Update the password

        // Save updated user data back to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        alert('Profile updated successfully!');
        this.$router.push('/dashboard'); // Redirect back to dashboard after updating
      } else {
        alert('User not found. Please log in again.');
      }
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
