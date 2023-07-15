<template>
  <div>
    
    <TextComp />
    <CardComp
      imagenHtml="../imgs/cardHtml.jpg"
      imagenCss="../imgs/cardCss.jpeg"
      imagenJs="../imgs/cardJs.png"
      start1="HTML"
      start2="CSS"
      start3="JS"
      route1="/html"
      route2="/css"
      route3="/js"
    />
  </div>
</template>

<script setup>
import TextComp from '@/components/TextComp.vue';
import CardComp from '@/components/CardComp.vue';
</script>
