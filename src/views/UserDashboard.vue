<template>
  <div class="container">
    <h1 class="mt-5">Welcome, {{ username }}!</h1>
    <p class="lead">This is your dashboard. You can manage your settings and view your profile here.</p>
    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
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
      this.username = user ? user.username : 'Guest'; // Set the username or default to Guest
    }
  },
  methods: {
    logout() {
      // Clear token and user data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/login'); // Redirect to login page after logout
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
