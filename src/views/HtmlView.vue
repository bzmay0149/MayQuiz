<!-- <template>
  <div class="html">
    <h1>esto es HTML</h1>
  </div>
  <CardComp imagenHtml="../imgs/html1.jpeg" imagenCss="../imgs/html2.jpeg" imagenJs="../imgs/html3.jpeg" start1="INICIO" start2="MEDIO" start3="EXPERTO" />
</template>

<script setup>
import CardComp from '@/components/CardComp.vue';

</script> -->


<template>
  <div class="html">
    <h1>Esto es HTML</h1>
    <Button @click="navigateToQuizView">
      Ir a la vista de quiz
    </Button>
    <CardComp
      imagenHtml="../imgs/html1.jpeg"
      imagenCss="../imgs/html2.jpeg"
      imagenJs="../imgs/html3.jpeg"
      start1="INICIO"
      start2="MEDIO"
      start3="EXPERTO"
    />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import CardComp from '@/components/CardComp.vue';
import Button from '@/components/Button.vue';

const route = useRoute();
const router = useRouter();

const navigateToQuizView = () => {
  router.push('/quiz');
};
</script>


