<template>
    <div>
	<nav class="navbar navbar-expand-lg  navbar-dark ">
   <a class="navbar-brand" href="#">
    <img src="LOGO-FINAL.ico"  class="d-inline-block align-top "  id="log">
    
  </a>
  <h1 class="Titulo" >FourpTV</h1>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" id="Box">
      <li class="nav-item ">
        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item " id="men">
        <a class="nav-link"  href="#">
          Gueneros 
        </a>
        <ul class="submenu"  >
          <li class="nav-item"  href="#"> <a class="nav-link" id="Sub">Comedia </a> </li>
          <li class="nav-item" href="#"> <a class="nav-link" id="Sub">Acción</a> </li>
          <li class="nav-item" href="#"> <a class="nav-link" id="Sub"> Terror</a> </li>
          <li class="nav-item" href="#"> <a class="nav-link" id="Sub">Romance</a> </li>
          <li class="nav-item" href="#"> <a class="nav-link" id="Sub">Fantasía </a> </li>
          <li class="nav-item" href="#"> <a class="nav-link" id="Sub">Anime</a> </li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Mi Perfil</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href="#">Foro</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btnn btn-outline-danger my-2 my-sm-0 " type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
</template>
<script>
export default {
    name:'menuuView'
}
</script>
<style lang="css" src="">
</style>
