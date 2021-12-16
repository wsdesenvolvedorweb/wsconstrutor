<template>
  <footer class="footer">
    <div id="site-map">
      <h1 class="text-center text-white">Mapa do site</h1>
      <b-container fluid>
        <b-row>
          <b-col>
            <p>
              <NuxtLink to="/">Home</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/sobre">Sobre</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/">Serviços</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/sites-institucionais">Sites Institucionais</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/lojas-virtuais">Lojas Virtuais</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/blogs">Blogs</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/portais-de-noticias">Portais de Notícias</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/manutencao-de-computadores">Manutenções de Computadores</NuxtLink>
            </p>
            <p>
              <NuxtLink to="/manutencoes">Manutenções</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/depoimentos">Depoimentos</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/portfolio">Portfólio</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/Blog">Blog</NuxtLink>
            </p>
          </b-col>
          <b-col>
            <p>
              <NuxtLink to="/contato">Contato</NuxtLink>
            </p>
          </b-col>
        </b-row>
      </b-container>
      <hr>
    </div>
    <b-container fluid>
      <b-row>
        <b-col sm="6" md="6">
          <h1 class="text-center text-white">Endereço</h1>
          <address id="address">
            <p>Rua Nossa Senhora da Aparecida, 609</p>
            <p>CEP: 13068 - 507</p>
            <p>Bairro: Vila Padre Anchieta</p>
            <p>Campinas - SP</p>
            <p><font-awesome-icon :icon="['fas', 'phone']" :style="{fontSize}" title="Telefone"></font-awesome-icon>: (19) 98238 - 0486</p>
            <p><font-awesome-icon :icon="['fab', 'whatsapp']" :style="{fontSize}" title="WhatsApp"></font-awesome-icon>: (19) 98238 - 0486</p>
            <p><font-awesome-icon :icon="['fab', 'telegram']" :style="{fontSize}" title="Telegram"></font-awesome-icon>: (19) 98238 - 0486</p>
          </address>
        </b-col>
        <b-col sm="6" md="6">
          <h1 class="text-center text-white">Redes sociais</h1>
          <div id="list-socials" class="text-center">
            <a href="https://www.facebook.com.br/wsdesenvolvedorweb" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook']" :style="{fontSize}" title="Facebook"></font-awesome-icon>  
            </a>
            <a href="https://www.instagram.com/wsdesenvolvedorweb" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram-square']" :style="{fontSize}" title="Facebook"></font-awesome-icon>  
            </a>
            <a href="https://www.linkedin.com.br/welllingtoncgs30" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin']" :style="{fontSize}"></font-awesome-icon>
            </a>
            <a href="https://www.github.com/wsdesenvolvedorweb" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" :style="{fontSize}"></font-awesome-icon>
            </a>
            <a href="https://www.gitlab.com/wsdesenvolvedorweb" target="_blank">
              <font-awesome-icon :icon="['fab', 'gitlab']" :style="{fontSize}"></font-awesome-icon>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    <b-container>
      <div id="signature">
        <b-row>
          <b-col sm="6" md="6">
            <div class="text-center">
              <p>Site desenvolvido por WS - Construtor</p>
            </div>
          </b-col>
          <b-col sm="6" md="6">
            <div class="text-center">
              <p><font-awesome-icon :icon="['fas', 'copyright']" title="Todos os direitos reservados"></font-awesome-icon> Todos os direitos reservados - 2021</p>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      fontSize: '45px',
    }
  }
}
</script>

<style>
footer.footer {
  background-color: #04709e;
}

div#site-map h1 {
  text-align: center;
}

div#site-map, div#site-map p a {
  color: white;
}

div#site-map p a:hover, div#list-socials a:hover {
  color: #75c7fb;
  text-decoration: none;
  transition: 5ms;
}

hr {
  background-color: #40a3e0;
  height: 3px;
}

address#address p {
  margin-bottom: 0;
  color: white;
}

div#list-socials a {
  color: white;
  margin: 5px;
}

div#signature {
  color: white;
}

@media screen and (max-width: 575px) {
  div#site-map {
    display: none;
  }
}
</style>