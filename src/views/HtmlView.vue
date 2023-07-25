<template>
  <div>
    <TitleComp title="Html" />
    <CardComp
      imagenHtml="../imgs/html1.jpeg"
      imagenCss="../imgs/html2.jpeg"
      imagenJs="../imgs/html3.jpeg"
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