<!-- <template>
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
        {
          pregunta: 'Pregunta 3',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 4',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 5',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 6',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 7',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 8',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 9',
          respuestas: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
          respuestaCorrecta: 2
        },
        {
          pregunta: 'Pregunta 10',
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
</style>  -->
 

<template>
  <div class="container">
    <div class="card">
      <div class="quiz">
        <h3>Preguntas contestadas: {{ preguntasContestadas }} | Acertadas: {{ preguntasAcertadas }}</h3>
        <h2 v-if="!juegoFinalizado">{{ preguntaActual.pregunta }}</h2>
        <ul v-if="!juegoFinalizado">
          <li v-for="(respuesta, index) in preguntaActual.respuestas" :key="index">
            <label :class="{'verde': mostrarColores && respuesta === preguntaActual.respuestaCorrecta, 'rojo': mostrarColores && respuestaSeleccionada === respuesta && respuesta !== preguntaActual.respuestaCorrecta}">
              <input type="radio" :value="respuesta" v-model="respuestaSeleccionada" :disabled="mostrarColores" />
              {{ respuesta }}
            </label>
          </li>
        </ul>
        <button @click="siguientePregunta" v-if="!juegoFinalizado" :disabled="respuestaSeleccionada === null || mostrarColores">Siguiente</button>
        <p v-if="juegoFinalizado">Juego finalizado. {{ mensajeResultado }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const preguntas = ref([]);
const preguntaActual = ref({});
const respuestaSeleccionada = ref(null);
const indicePregunta = ref(0);
const preguntasContestadas = ref(0);
const preguntasAcertadas = ref(0);
const juegoFinalizado = ref(false);
const mensajeResultado = ref('');
const mostrarColores = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get('/Preguntas');
    preguntas.value = response.data;

    // Realizar la selección aleatoria de 10 preguntas
    const preguntasAleatorias = obtenerPreguntasAleatorias(preguntas.value);
    preguntas.value = preguntasAleatorias;

    mostrarPreguntaActual();
  } catch (error) {
    console.error('Error al obtener preguntas:', error);
  }
});

const obtenerPreguntasAleatorias = (preguntas) => {
  // Implementa aquí la lógica para obtener 10 preguntas aleatorias desde preguntas
  // Puedes utilizar cualquier algoritmo de selección aleatoria que prefieras
  // Aquí tienes un ejemplo sencillo usando el método sort() de JavaScript
  return preguntas.sort(() => Math.random() - 0.5).slice(0, 10);
};

const mostrarPreguntaActual = () => {
  preguntaActual.value = preguntas.value[indicePregunta.value];
};

const siguientePregunta = async () => {
  if (!juegoFinalizado.value && respuestaSeleccionada.value !== null) {
    const respuestaCorrecta = preguntaActual.value.respuestaCorrecta;
    const respuestaUsuario = respuestaSeleccionada.value;
    const esCorrecta = respuestaCorrecta === respuestaUsuario;

    mostrarColores.value = true;

    preguntasContestadas.value++;

    if (esCorrecta) {
      preguntasAcertadas.value++;
    }

    respuestaSeleccionada.value = null;

    if (indicePregunta.value < preguntas.value.length - 1) {
      await esperar(1000); // Esperar 1 segundo antes de pasar a la siguiente pregunta
      indicePregunta.value++;
      mostrarPreguntaActual();
      mostrarColores.value = false;
    } else {
      juegoFinalizado.value = true;
      // Mostrar el mensaje con el resultado final
      mostrarResultado();
    }
  }
};

const mostrarResultado = () => {
  if (preguntasAcertadas.value >= 9) {
    mensajeResultado.value = `¡Has sacado sobresaliente! Has acertado ${preguntasAcertadas.value} de 10 preguntas.`;
  } else if (preguntasAcertadas.value >= 5) {
    mensajeResultado.value = `Has aprobado. Has acertado ${preguntasAcertadas.value} de 10 preguntas.`;
  } else {
    mensajeResultado.value = `Has suspendido. Has acertado ${preguntasAcertadas.value} de 10 preguntas.`;
  }
};

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  max-width: 800px; /* Ajusta el ancho según tus necesidades */
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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

label {
  display: block;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

label.verde {
  background-color: #b2e8b2; /* Color verde para respuestas correctas */
}

label.rojo {
  background-color: #f8b0b0; /* Color rojo para respuestas incorrectas */
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

h3 {
  margin-bottom: 8px;
}
</style> 

























