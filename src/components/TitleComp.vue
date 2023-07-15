<template>
    <div class="card text-center border border-0 pt-5 p-0 ">
     <h1 class="card-header border border-0 bg-transparent">
       ¡Escoja el nivel deseado de {{ title  }}!
     </h1>
 </div> 
 </template>
 
 <script>
 export default {
   name: 'TitleComp',
   props: {
     title: String,
       
     
   },
 };
 
 </script>
 
 <style scoped>
 .card{
   /* background-image: url(../assets/img/fondo.jpg); */
   margin-bottom: 4rem;
  
   width: 60%;
     height: auto;
     background-color: rgb(105, 110, 212); 
    border: 3px solid rgba(236, 231, 231, 0.11);
     box-shadow: 5px 5px 6px 4px rgb(112, 109, 109);
     margin-bottom: 2rem;
     padding-top: 2rem;
     margin-top: 2rem;
     margin-left: 20%;
    
    
 
 }
 .card-header{
   padding-bottom: 4rem;
   color:   #b0e0fa;
 }
 </style>