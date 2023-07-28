<template>
  <footer class="conte text-center text-primary pt-4">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #3b5998;"
          href="#!"
          role="button"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <!-- Twitter -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #55acee;"
          href="#!"
          role="button"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <!-- Google -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #dd4b39;"
          href="#!"
          role="button"
        >
          <i class="fab fa-google"></i>
        </a>
        <!-- Instagram -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #ac2bac;"
          href="#!"
          role="button"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <!-- Linkedin -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #0082ca;"
          href="#!"
          role="button"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <!-- Github -->
        <a
          class="btn text-white btn-floating m-1"
          style="background-color: #b63434;"
          href="#!"
          role="button"
        >
          <i class="fab fa-github"></i>
        </a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-1">
      <p class="text-copy">© 2023 MayQuiz</p>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script setup>
</script>

<style scoped>
.conte {
  background-color: rgb(105, 110, 212);
}

.text-copy {
  background-color: rgb(105, 110, 212);
  padding: 0;
  color:  #b0e0fa;
}

@media (max-width:  1200px) {
  .conte{
    margin-top: 7.5em;
  }
}
@media (max-width: 767.98px){
  .conte{
    margin-top: 1em;
  }
}

</style>
