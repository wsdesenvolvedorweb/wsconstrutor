<template>
  <header class="header">
      <div>
        <b-navbar toggleable="sm">
          <b-navbar-toggle target="menu">
            <font-awesome-icon :icon="['fas', 'bars']" :style="{color: 'white', fontSize: '40px'}"></font-awesome-icon>
          </b-navbar-toggle>
          <b-navbar-brand class="text-white">WS - Construtor</b-navbar-brand>
          <b-collapse id="menu" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/sobre">Sobre</b-nav-item>
              <b-nav-item-dropdown text="Serviços">
                <b-dropdown-item to="/sites-institucionais">Sites Institucionais</b-dropdown-item>
                <b-dropdown-item to="/lojas-virtuais">Lojas Virtuais</b-dropdown-item>
                <b-dropdown-item to="/blogs">Blogs</b-dropdown-item>
                <b-dropdown-item to="/portais-de-noticias">Portais de Notícias</b-dropdown-item>
                <b-dropdown-item to="/manutencao-de-computadores">Manutenção de Computadores</b-dropdown-item>
                <b-dropdown-item to="/manutencoes">Manutenções</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item to="/depoimentos">Depoimentos</b-nav-item>
              <b-nav-item to="/portfolio">Portfólio</b-nav-item>
              <b-nav-item to="/blog">Blog</b-nav-item>
              <b-nav-item to="/contato">Contato</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
* {
    font-family: Oswald;
}

header.header, .dropdown-menu, .dropdown-menu a:hover {
    background-color: #189dd4;
}

.navbar-brand {
  font-size: 22px;
}

.navbar-light .navbar-nav .nav-link, .dropdown-menu a {
  color: white;
}

.navbar-light .navbar-nav .nav-link:hover, .dropdown-menu a:hover {
  color: #75c7fb;
}
</style>