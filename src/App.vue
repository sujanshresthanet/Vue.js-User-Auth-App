<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isAuthenticated">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <router-link class="btn btn-outline-success" to="/profile">Profile</router-link>
            </li>
            <li class="nav-item" v-if="isAuthenticated">
              <button class="btn btn-outline-danger" @click="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    this.checkAuthentication();
  },
  watch: {
    // Watch for changes in localStorage token to update authentication status
    '$route'() {
      this.checkAuthentication();
    },
  },
  methods: {
    checkAuthentication() {
      // Check if the token is present in localStorage
      this.isAuthenticated = localStorage.getItem('token') === 'test-token-12345';
    },
    logout() {
      // Remove the token from localStorage
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      // Redirect to the login page
      this.$router.push('/login');
    },
  },
};
</script>

<style>
/* You can add additional custom styles here */
</style>
