<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 mt-1 g-3">
      <div class="col">
        <div class="card h-100 bg-transparent border-0">
          <div class="d-flex justify-content-center align-items-center">
            <router-link :to="route1"><img :src="imagenHtml" class="card-img-top img-fluid" alt="Html"></router-link>
          </div>
          <div class="card-body d-flex justify-content-center align-items-center">
            <router-link :to="route1"><button class="btn">{{ start1 }}</button></router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 bg-transparent border-0">
          <div class="d-flex justify-content-center align-items-center">
            <router-link :to="route2"><img :src="imagenCss" class="card-img-top img-fluid" alt="Css"></router-link>
          </div>
          <div class="card-body d-flex justify-content-center align-items-center">
            <router-link :to="route2"><button class="btn">{{ start2 }}</button></router-link>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 bg-transparent border-0">
          <div class="d-flex justify-content-center align-items-center">
            <router-link :to="route3"><img :src="imagenJs" class="card-img-top img-fluid" alt="Js"></router-link>
          </div>
          <div class="card-body d-flex justify-content-center align-items-center">
            <router-link :to="route3"><button class="btn">{{ start3 }}</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, useRouter } from 'vue-router';

defineProps({
  imagenHtml: String,
  imagenCss: String,
  imagenJs: String,
  start1: String,
  start2: String,
  start3: String,
  route1: String,
  route2: String,
  route3: String
});

const router = useRouter();
</script>



<style scoped>
.card {
  margin-bottom: 2rem;
  padding-top: 2rem;
}

.card-img-top {
  height: 12em; 
  width: 20em;
  border-radius: 10%;
} 

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.btn {
  background-color: rgb(105, 110, 212);
  color: #b0e0fa;
  width: em;
}

.btn:hover {
  background-color: rgb(207, 91, 49);
  color: rgb(105, 110, 212);
}

@media (max-width: 767.98px) {
  .card-img-top {
    height: 8em;
  }
}
</style>
  