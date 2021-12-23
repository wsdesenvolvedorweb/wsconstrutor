<template>
  <div>
    <Header></Header>
    <section id="budget">
        <div id="content-budget">
            <h1 id="budget-title" class="text-center">Faça o seu orçamento sobre site, loja virtual, blog, portal de notícias ou manutenção de computadores.</h1>
            <b-container class="text-center">
                <b-row>
                    <b-col>
                        <b-button type="button" variant="outline-light">
                            <a href="https://wa.me/5519982380486" target="_blank" class="link-contact">
                                <font-awesome-icon :icon="['fab', 'whatsapp']" :style="{fontSize: iconSize}"></font-awesome-icon>Entre em contato agora mesmo
                            </a>
                        </b-button>
                    </b-col>
                    <b-col>
                        <b-button type="button" variant="outline-light">
                            <a href="https://t.me/wsdesenvolvedorweb" target="_blank" class="link-contact">
                                <font-awesome-icon :icon="['fab', 'telegram']" :style="{fontSize: iconSize}"></font-awesome-icon>Entre em contato agora mesmo
                            </a>
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </section>
    <section id="services">
        <b-container fluid>
            <h1 class="text-center">Nossos Serviços</h1>
            <div class="content">
                <b-row>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/dispositivos.jpg"
                            img-alt="Imagem de sites em dispositivos da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Sites Institucionais</h1>
                            <ul>
                                <li>Desenvolvimento responsivo</li>
                                <li>Design e layout moderno</li>
                                <li>SEO (Search Engine Optimization)</li>
                            </ul>
                            <NuxtLink to="/sites-institucionais">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/blog.jpg"
                            img-alt="Imagem de blog da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Blogs</h1>
                            <ul>
                                <li>Desenvolvimento responsivo</li>
                                <li>Design e layout moderno</li>
                                <li>Gerenciamento de conteúdos</li>
                                <li>SEO</li>
                            </ul>
                            <NuxtLink to="/blogs">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/ecommerce.jpg"
                            img-alt="Imagem de loja virtual da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Lojas Virtuais</h1>
                            <ul>
                                <li>Desenvolvimento responsivo</li>
                                <li>Design e layout moderno</li>
                                <li>Loja virtual gerenciada pela plataforma WordPress e WooCommerce</li>
                                <li>SEO</li>
                            </ul>
                            <NuxtLink to="/lojas-virtuais">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/portal-noticias.jpg"
                            img-alt="Imagem de portal de notícias da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Portais de Notícias</h1>
                            <ul>
                                <li>Desenvolvimento responsivo</li>
                                <li>Design e layout moderno</li>
                                <li>Gerenciamento de conteúdo</li>
                                <li>SEO</li>
                            </ul>
                            <NuxtLink to="/portais-de-noticias">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/manutencao-computadores.jpg"
                            img-alt="Imagem de manutenção de computadores da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Manutenção de computadores</h1>
                            <ul>
                                <li>Formatação de computadores</li>
                                <li>Atendimento no local</li>
                                <li>Realização de backups (cópia de segurança)</li>
                            </ul>
                            <NuxtLink to="/manutencao-de-computadores">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="4">
                        <b-card
                            img-top
                            img-src="../images/manutencoes.png"
                            img-alt="Imagem de manutenções da WS - Construtor"
                            img-fluid
                        >
                            <h1 class="text-center">Manutenções</h1>
                            <ul>
                                <li>Manutenções de layout e atualização de design</li>
                                <li>Gerenciamento e atualização de conteúdos</li>
                                <li>Atualizações de plugins WordPress e WooCommerce (não se trata do uso de linguagens de programação)</li>
                            </ul>
                            <NuxtLink to="/manutencoes">
                                <b-button type="button" variant="outline-info" class="btn-block">Saiba mais!</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
    <section id="blog">
        <b-container fluid>
            <h1 class="text-center">Últimas Informações</h1>
            <div class="content">
                <b-row>
                    <b-col sm="6" md="3" v-for="post in posts" :key="post.id">
                        <b-card
                            img-top
                            :img-src="`${post.better_featured_image.source_url}`"
                            :img-alt="`${post.better_featured_image.alt_text}`"
                            img-fluid
                        >
                            <p class="text-justify" v-html="`${post.content.rendered.slice(0, 86) + '...'}`"></p>
                            <NuxtLink :to="{name: 'post-slug', params: {slug: post.slug, id: post.id}}"><b-button type="button" variant="outline-primary" class="btn-block">Leia mais</b-button></NuxtLink>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            iconSize: "50px",
            posts: []
        }
    },
    methods: {
        async getPosts() {
            await axios.get("http://localhost/blog-wsconstrutor/wordpress/wp-json/wp/v2/posts?per_page=4&order=desc").then((response) => {
            console.log(response.data)
            this.posts = response.data
        }).catch((error) => {
            return this.$toast.error("Erro ao carregar os posts", error)
        })
        }
    },
    mounted() {
        this.getPosts()
    },
    head: {
        title: "Bem-vindo ao site oficial da WS - Construtor"
    }
}
</script>

<style scoped>
section#budget {
    background-image: url("../images/technology.jpg");
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    height: 100vh;
}

h1#budget-title {
    color: white;
}

div#content-budget {
    padding: 8px;
    margin: 5px;
}

section#services {
    background-image: linear-gradient(100deg, paleturquoise, white);
    padding: 8px;
}

div.card {
    background-color: inherit;
    margin: 5px;
}

div.content {
    text-align: justify;
    margin: 5px;
}

section#blog {
    background-image: linear-gradient(100deg, white, paleturquoise);
    padding: 8px;
}

section#portfolio {
    background-image: linear-gradient(180deg, paleturquoise, white);
    padding: 8px;
}

a.link-contact {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a.link-contact:hover {
    color: black;
    text-decoration: none;
}

a:hover {
    color: white;
    text-decoration: none;
}

@media screen and (min-width: 575px) {
    a.link-contact:active {
        color: black;
        text-decoration: none;
    }
}
</style>