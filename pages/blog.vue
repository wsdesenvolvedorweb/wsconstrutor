<template>
  <div>
    <Header></Header>
    <section id="last-news">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Blog</h1>
                <b-row>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/dominio-hospedagem.webp"
                            img-alt="Imagem de domínio e hospedagem"
                            img-top
                        >
                            <b-card-text>Você sabe quais são as diferenças entre domínio e hospedagem?...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/desenvolvimento-responsivo.jpg"
                            img-alt="Imagem de dispositivos para desenvolvimento de sites"
                            img-top
                        >
                            <b-card-text>Você tem visitantes que acessam o seu site tanto pelo desktop quanto por dispositivos móveis...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/headless.jpg"
                            img-alt="Imagem de desenvolvimento headless da WS - Construtor"
                            img-top
                        >
                            <b-card-text>Para sabermos o que é um Headless CMS (Content Management System)...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/seo.jpg"
                            img-alt="Imagem de SEO em um site"
                            img-top
                        >
                            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dignissim lorem, 
                            non commodo erat. Praesent felis velit, laoreet et rutrum a, venenatis in felis...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/seo.jpg"
                            img-alt="Imagem de SEO em um site"
                            img-top
                        >
                            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dignissim lorem, 
                            non commodo erat. Praesent felis velit, laoreet et rutrum a, venenatis in felis...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/headless.jpg"
                            img-alt="Imagem de desenvolvimento headless da WS - Construtor"
                            img-top
                        >
                            <b-card-text>Para sabermos o que é um Headless CMS (Content Management System)...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/dominio-hospedagem.webp"
                            img-alt="Imagem de domínio e hospedagem"
                            img-top
                        >
                            <b-card-text>Você sabe quais são as diferenças entre domínio e hospedagem?...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/desenvolvimento-responsivo.jpg"
                            img-alt="Imagem de dispositivos para desenvolvimento de sites"
                            img-top
                        >
                            <b-card-text>Você tem visitantes que acessam o seu site tanto pelo desktop quanto por dispositivos móveis...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" type="button">Leia mais</b-button>
                        </b-card>
                    </b-col>
                </b-row>
                <div class="overflow-auto mt-3">
                    <b-pagination 
                        v-model="page" 
                        :perPage="perPage" 
                        :total-rows="100"
                        first-text="Primeiro"
                        prev-text="Anterior"
                        next-text="Próximo"
                        last-text="Último"
                        align="center">
                    </b-pagination>
                </div>
            </div>
        </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            perPage: 8
        }
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
</style>