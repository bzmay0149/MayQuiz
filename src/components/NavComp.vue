<template>
    <div>
      <nav class="navbar navbar-light">
        <div class="container d-flex align-items-center justify-content-between">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/logo1.png" alt="" width="100" >
          </router-link>
          
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
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
      </nav>
    </div>
  </template>
  
  
  


<script setup>


</script>

<style scoped>
  .navbar-nav.flex-row .nav-item:not(:last-child) {
    margin-right: 2cm;
  }
  .navbar-light{
    background-color: rgb(105, 110, 212);
  }
  .nav-link{
    color: #b0e0fa;
    font-size: x-large;
  }
  .nav-link:hover{
    
    color: rgb(207, 91, 49);
  }
  </style>