<template>
 <NavComp />
 <router-view/>
 <FooterComp /> 
</template>

<script setup>
import NavComp from './components/NavComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(251, 242, 239);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
