<template>
  <div>
    <TitleComp title="JavaScript" />
    <CardComp
      imagenHtml="../imgs/js1.jpg"
      imagenCss="../imgs/js2.png"
      imagenJs="../imgs/js3.jpeg"
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




