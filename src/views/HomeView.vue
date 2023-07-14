<!-- <template>
 <TextComp />
<CardComp imagenHtml="../imgs/cardHtml.jpg" imagenCss="../imgs/cardCss.jpeg" imagenJs="../imgs/cardJs.png" start1="HTML" start2="CSS" start3="JS" />

</template>

<script setup>
import TextComp from '@/components/TextComp.vue';
import CardComp from '@/components/CardComp.vue';

</script> -->

<template>
    <div>
      <h1>Componente de vista</h1>
      <Button @click="navigateToHtmlView">
        Ir a la vista de HTML
      </Button>
  
      <TextComp />
      <CardComp
        imagenHtml="../imgs/cardHtml.jpg"
        imagenCss="../imgs/cardCss.jpeg"
        imagenJs="../imgs/cardJs.png"
        start1="HTML"
        start2="CSS"
        start3="JS"
      />
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import Button from '@/components/Button.vue';
  import TextComp from '@/components/TextComp.vue';
  import CardComp from '@/components/CardComp.vue';
  
  const route = useRoute();
  const router = useRouter();
  
  const navigateToHtmlView = () => {
    router.push('/html');
  };
  </script>
