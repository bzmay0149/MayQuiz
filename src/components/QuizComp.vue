<template>
  <div class="quiz">
    <h2>{{ preguntaActual.pregunta }}</h2>
    <ul>
      <li v-for="(respuesta, index) in preguntaActual.respuestas" :key="index">
        <label>
          <input type="radio" :value="respuesta" v-model="respuestaSeleccionada" />
          {{ respuesta }}
        </label>
      </li>
    </ul>
    <button @click="siguientePregunta">Siguiente</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          pregunta: 'Pregunta 1',
          respuestas: ['Respuesta 1', 'Respuesta 2', 'Respuesta 3'],
          respuestaCorrecta: 0
        },
        {
          pregunta: 'Pregunta 2',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        // Agrega más preguntas aquí
      ],
      preguntaActual: {},
      respuestaSeleccionada: null,
      indicePregunta: 0
    };
  },
  mounted() {
    this.mostrarPreguntaActual();
  },
  methods: {
    mostrarPreguntaActual() {
      this.preguntaActual = this.preguntas[this.indicePregunta];
    },
    siguientePregunta() {
      if (this.respuestaSeleccionada !== null) {
        // Verificar si la respuesta es correcta
        const respuestaCorrecta = this.preguntaActual.respuestaCorrecta;
        const respuestaUsuario = this.respuestaSeleccionada;
        const esCorrecta = respuestaCorrecta === respuestaUsuario;

        // Reiniciar la respuesta seleccionada
        this.respuestaSeleccionada = null;

        // Mostrar mensaje de respuesta (puedes adaptar esto a tu necesidad)
        if (esCorrecta) {
          alert('¡Respuesta correcta!');
        } else {
          alert('Respuesta incorrecta.');
        }

        // Pasar a la siguiente pregunta
        this.indicePregunta++;
        if (this.indicePregunta < this.preguntas.length) {
          this.mostrarPreguntaActual();
        } else {
          alert('¡Has completado el quiz!');
          // Aquí puedes realizar alguna acción adicional al finalizar el quiz
        }
      }
    }
  }
};
</script>

<style scoped>
.quiz {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
