<template>
  <div>
    <Header></Header>
    <section id="portal">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Portais de Notícias</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/portal-noticias.jpg" alt="Imagem de portais de notícias da WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Portal de notícia é um site cujo o foco é nas informações geradas dinamicamente com o objetivo de manter o 
                        visitante sempre atualizado a cada segundo com novas informações, além da participação do público deixando os seus 
                        comentários.</p>
                        <p>Nós da WS - Construtor desenvolvemos o seu portal de notícia com base em um levantamento de requisitos para entendermos 
                        a sua real necessidade. Em seguida é realizado o processo de prototipação da interface no figma e, uma vez o cliente aprovando, é feito 
                        o processo de identidade visual do site e a produção do mesmo. A abordagem de desenvolvimento utilizada é chamada de Headless em que 
                        o gerenciamento de conteúdos é desacoplado da interface gráfica, resultando em uma melhor divisão de responsabilidades e uma melhor 
                        manutenção futura do portal de notícia.</p>
                        <p>Realizamos também o gerenciamento do conteúdo publicado no seu portal de notícia, onde fazemos as atualizações e deixamos o seu blog 
                        com assuntos atualizados para você fazer sucesso na Internet.</p>
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
        title: "Portais de Notícias WS - Construtor"
    }
}
</script>

<style scoped>
section#portal {
    background-image: linear-gradient(180deg, white, paleturquoise, rgb(75, 235, 235));
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