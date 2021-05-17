<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
  <routerLink to="/" class="navbar-brand">EricksonFilmes</routerLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-torget="#navbarNav" aria-controls="navbarNav" aria-expand="false">
    <span class="navbar-toggler-icons"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <!-- routerLinkActive="active" -->
      <!-- <li class="nav-item">
        <a class="nav-link" router-link to="/relatorio">Relatórios</a>
      </li> -->
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/lancamento" exact>Lancamentos</router-link>
      </li>
      <li class="nav-item">
        <router-link  class="nav-link" active-class="active" to="/categoria" exact>Categorias</router-link>
      </li>
    </ul>
  </div>
</nav>

</template>
<script>
export default {
  name: 'NavBar'
}
</script>
