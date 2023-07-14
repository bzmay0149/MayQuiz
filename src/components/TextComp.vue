<template>
  <div class="card text-center border border-0 title-margin">
    <h1 class="card-header pt-4 border border-0 bg-transparent">
      ¡Bienvenido al juego Quiz de HTML, CSS y JavaScript!
    </h1>
    <div class="margin">
      <div class="card-body pt-5">
        <h4 class="card-title">
          <span :class="{'hide': !isTextVisible}" id="hide-text">
            <p>Este juego te desafiará a poner a prueba tus conocimientos en programación web.</p>
            <p>¿Estás listo para poner a prueba tus habilidades y aprender más sobre HTML, CSS y JavaScript?</p>
            <p>Cada pregunta tiene tres opciones y solo una respuesta correcta.</p>
            <p>¡Intenta responder todas las preguntas correctamente para convertirte en el campeón de MayQuiz!</p>
            <p>¡Que empiece la diversión!</p>
          </span>
        </h4>
      </div>
    </div>
  </div>
  <button class="btn" @click="toggleText">{{ isTextVisible ? 'Leer menos' : 'Leer más' }}</button>
</template>

<script setup>
import { ref } from 'vue';

const isTextVisible = ref(false);

function toggleText() {
  isTextVisible.value = !isTextVisible.value;
}
</script>

<style scoped>
.card {
  background-color: rgb(105, 110, 212);
  width: 80%;
  height: auto;
  background-color: rgb(105, 110, 212);
  border: 3px solid rgba(236, 231, 231, 0.11);
  box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
  margin-bottom: 2rem;
  padding-top: 2rem;
  margin-top: 2rem;
  margin-left: 10%;
  
}

.margin {
  margin: 0em 6em;
}

.card-body {
  color:  #b0e0fa;
}
.card-header{
  color:   #b0e0fa;
}

.hide {
  display: none;
}

.hide p {
  margin: 0.5rem 0;
}
.btn{
  background-color:  rgb(105, 110, 212);
  color:   #b0e0fa;
}

.btn:hover{
  background-color: rgb(207, 91, 49);
  color:rgb(105, 110, 212);
}


</style>
