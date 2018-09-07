<template>
  <div class="Inicio">
  
       <legend class="RGTR"><span> FourpTV </span> </legend>
       <form id="ContactForm" class="ContactForm"> 
          <input class="form-control" type="email" name="email" title="Tu email" placeholder="Correo" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
           
           <input class="form-control" v-model="password" v-show="!showPass" type="password" name="password" title="Tu contraseña" placeholder="Contraseña" pattern="[A-Za-z0-9]{8,16}" required >
           <input class="form-control" v-model="password" v-show="showPass" type="text" name="password" title="Tu contraseña" placeholder="Contraseña" pattern="[A-Za-z0-9]{8,16}" required>
          
         
    
        <input class="btn btn-outline-primary" type="submit" value="Ingresar" >
             
       
       </form>
  </div>
</template>


<script>
export default {
    name:'HomeView',
   
}
</script>


<style lang="css" src="@/Estilos/Home.css"> </style>
