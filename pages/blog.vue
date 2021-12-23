<template>
  <div>
    <Header></Header>
    <section id="last-news">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Blog</h1>
                <b-row>
                    <b-col sm="6" md="3" v-for="post in postsPerPage" :key="post.id">
                        <b-card
                            :img-src="`${post.better_featured_image.source_url}`"
                            :img-alt="`${post.better_featured_image.alt_text}`"
                            img-top
                        >
                            <b-card-text v-html="`${post.content.rendered.slice(0, 86)}...`"></b-card-text>
                            <NuxtLink :to="{name: 'post-slug', params: {slug: post.slug, id: post.id}}">
                                <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                            </NuxtLink>
                        </b-card>
                    </b-col>
                </b-row>
                <nav aria-label="Navegação entre páginas do blog da WS - Construtor">
                    <ul class="pagination justify-content-center mt-3">
                        <li class="page-item" @click="previousPage">
                            <NuxtLink to="#" class="page-link" tabindex="-1">Anterior</NuxtLink>
                        </li>
                        <li class="page-item">
                            <NuxtLink to="#" class="page-link">{{page}}</NuxtLink>
                        </li>
                        <li class="page-item" @click="nextPage">
                            <NuxtLink to="#" class="page-link">Próximo</NuxtLink>
                        </li>
                    </ul>
                </nav>
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
            page: 1,
            perPage: 8,
            postsPerPage: []
        }
    },
    methods: {
        async getPostsPaginated() {
            await axios.get(`http://localhost/blog-wsconstrutor/wordpress/wp-json/wp/v2/posts?page=${this.page}&per_page=${this.perPage}&order=desc`).then((response) => {
                this.postsPerPage = response.data
            })
        },
        previousPage() {
            if(this.page < 2) {
                return this.page
            }
            --this.page
            this.getPostsPaginated()
        },
        nextPage() {
            if(!(this.postsPerPage.length >= this.perPage)) {
                return
            }
            ++this.page
            this.getPostsPaginated()
        }
    },
    mounted() {
        this.getPostsPaginated()
    },
    head: {
        title: "Últimas informações - WS - Construtor"
    }
}
</script>

<style scoped>
section#last-news {
    background-color: rgb(229, 226, 226);
    padding: 8px;
}

div.content {
    text-align: justify;
    margin: 5px;
}

div.card {
    background-color: inherit;
    margin: 5px;
}

nav ul li a {
    background-color: inherit;
}

a {
    text-decoration: none;
}
</style>