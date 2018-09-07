<template>
  <div class="registro">
    
       <legend class="RGTR1"><span> Registrarme </span> </legend>
    <form id="ContactForm1" class="ContactForm1">
            <input class="form-control" type="text" name="name" title="Tu nombre" placeholder="Nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
            <input class="form-control" type="email" name="email" title="Tu email" placeholder="Correo" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
            
            <input class="form-control" v-model="password"  type="password" name="password" title="Tu contraseña" placeholder="Contraseña" pattern="[A-Za-z0-9]{8,16}" required >
            <input class="form-control" type="password" name="password2" title="Repetir tu contraseña" placeholder="Repetir Contraseña" pattern="[A-Za-z0-9]{8,16}" required>
            <input class="btn btn-outline-primary" type="submit" value="Registrar" >
            
    </form> 
  </div>
</template>
<script>
export default {
    name:'RegritroView'
}
</script>
<style lang="css" src="@/Estilos/Registro.css">
</style>