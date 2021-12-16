<template>
  <div>
    <Header></Header>
    <section id="blogs">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Blogs</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/blog.jpg" alt="Imagem de blog da WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Um blog é um tipo de site em que o foco é a exposição de conteúdos relevantes para discussão com o seu 
                        público. É um tipo de site em que o conteúdo é gerado dinamicamente.</p>
                        <p>Nós da WS - Construtor desenvolvemos o seu blog na Internet utilizando a abordagem de desenvolvimento de site 
                        gerado estaticamente, em que é feito o levantamento dos requisitos para entendermos qual é a sua necessidade, em seguida, 
                        desenvolvemos o protótipo da interface no figma, realização de processo de identidade visual e em seguida a produção do mesmo, 
                        utilizando a abordagem de desenvolvimento de sites chamada Headless em que o gerenciamento de conteúdos é desacoplado da interface 
                        gráfica, resultando em uma melhor divisão de responsabilidades e uma melhor manutenção futura do blog.</p>
                        <p>Realizamos também o gerenciamento do conteúdo publicado no seu blog, onde fazemos as atualizações e deixamos o seu blog com assuntos 
                        atualizados para você fazer sucesso na Internet como criador de conteúdo.</p>
                        <ContactButtons></ContactButtons>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
    head: {
        title: "Blogs - WS Construtor"
    }
}
</script>

<style scoped>
section#blogs {
    background-image: linear-gradient(180deg, rgb(72, 235, 235), paleturquoise, white);
    padding: 8px;
}

div.content {
    text-align: justify;
    margin: 5px;
}

img#image {
    width: 100%;
}
</style>