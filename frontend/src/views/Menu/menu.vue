<template>
  <div class="Men">
     
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
 
   <div class="container">
    	<div id="carousel">
			<figure><a href="http://www.lisenme.com/simple-snake-game-html5-canvas-javascript/" target="_blank"><img src="@/img/1.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/multiple-selection-link-single-image-using-map-area-tag/" target="_blank"><img src="@/img/2.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/ajax-sweetalert-live-data-deleting-rows-php-mysql-ajax/" target="_blank"><img src="@/img/3.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/angular-directive-live-search-datatables-child-rows/" target="_blank"><img src="@/img/4.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/real-time-progress-bar-using-angular-jquery-javascript/" target="_blank"><img src="@/img/5.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/live-filter-with-multiple-options-using-jquery/" target="_blank"><img src="@/img/6.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/social-media-timeline-post-using-json-based-jquery/" target="_blank"><img src="@/img/7.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/table-cells-selection-using-jquery-plugin-tutorial/" target="_blank"><img src="@/img/8.jpg" alt=""></a></figure>
			<figure><a href="http://www.lisenme.com/dropdown-filtersearch-product-items-using-jquery/" target="_blank"><img src="@/img/9.jpg" alt=""></a></figure>
		</div>
	</div>
              
  </div>
</template>
<script>
export default {
    name:'MenuView'
}
</script>
<style lang="css" src="@/Estilos/menu.css">
</style>