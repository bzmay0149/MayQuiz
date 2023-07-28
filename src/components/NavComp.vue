<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container d-flex flex-column align-items-center">
        <div class="navbar-logo">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/logo1.png" alt="logo" width="100">
          </router-link>
        </div>
        
        <div class="navbar-links">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/html" class="nav-link">HTML</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/css" class="nav-link">CSS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/js" class="nav-link">JS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>  

</script>

<style scoped>
  .navbar-light {
    background-color: rgb(105, 110, 212);
  }
  .nav-link {
    color: #b0e0fa;
    font-size: x-large;
  }
  .nav-link:hover {
    color: rgb(207, 91, 49);
  }
  .navbar-logo {
    margin-bottom: 1rem;
  }
  .navbar-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .nav-item {
    margin-right: 8rem;
    margin-left: 4rem;
  }
  
  @media (max-width: 1200px) {
    .nav-item {
      margin-right: 6rem;
      margin-left: 2rem;
    }
  }
  @media (max-width: 767px) {
   
    .nav-item {
      margin-right: .8rem ;
      margin-left: 1rem;
    }
    
    .navbar-links .navbar-collapse {
      flex-basis: 100%;
      display: none;
    }
    .navbar-links .navbar-toggler {
      display: flex;
    }
    .navbar-links .navbar-toggler[aria-expanded="true"] {
      display: none;
    }
    .navbar-links .navbar-collapse.show {
      display: flex !important;
      flex-direction: column;
    }
    .navbar-links .navbar-nav {
      flex-direction: column;
      text-align: center;
    }
  }
  
</style>