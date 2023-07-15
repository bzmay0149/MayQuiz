<template>
  <div>
    <TitleComp title="Css" />
    <CardComp
      imagenHtml="../imgs/css1.jpeg"
      imagenCss="../imgs/css2.jpg"
      imagenJs="../imgs/css3.jpeg"
      start1="INICIO"
      start2="MEDIO"
      start3="EXPERTO"
      route1="/quiz"
      route2="/quiz"
      route3="/quiz"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import TitleComp from '@/components/TitleComp.vue';
import CardComp from '@/components/CardComp.vue';

const router = useRouter();
</script>



