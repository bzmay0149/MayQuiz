<template>
    <button class="button" @click="navigateTo">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();
  
  const navigateTo = () => {
    // Utiliza el router de Vue para navegar a otra vista
    // Aquí puedes personalizar la lógica de navegación según tus necesidades
    router.push('/home');
  };
  </script>
  
  <style scoped>
  
  </style>
  