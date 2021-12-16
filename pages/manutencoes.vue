<template>
  <div>
    <Header></Header>
    <section id="maintenances">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Manutenções</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/manutencoes.png" alt="Imagem de manutenções nos serviços de sites, lojas virtuais, blogs e portais de notícias da WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Você possui um site responsivo, com layout e design moderno, uma identidade virtual na Internet, 
                        investiu em um bom nome de domínio e em um bom serviço de hospedagem e acha que parou por aqui. Se você pensa assim, está 
                        completamente enganado(a). Um site, como qualquer outra coisa, precisa passar um processo de manutenção para manter em pleno 
                        funcionamento e com layout e design atualizado para acompanhar a evolução do mercado.</p>
                        <p>Nós da WS - Construtor trabalhamos com a manutenção da seguinte maneira: É realizado um levantamento de requisitos para entendermos 
                        melhor a sua necessidade e a partir dessa etapa, fazemos uma avaliação para, em seguida, realizar o serviço. Esse serviço é cobrado por hora 
                        para que você tenha um site sempre atualizado.</p>
                        <p>As manutenções no seu site realizados pela WS - Construtor englobam os seguintes serviços:</p>
                        <ul>
                            <li>Mudança de layout</li>
                            <li>Gerenciamento e atualização de conteúdos</li>
                            <li>Mudança de design, deixando de acordo com as tendências de mercado</li>
                        </ul>
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
        title: "Manutenções - WS - Construtor"
    }
}
</script>

<style scoped>
section#maintenances {
    background-image: linear-gradient(90deg, rgb(75, 235, 235), paleturquoise, white);
    padding: 8px;
}

div.content {
    text-align: justify;
    margin: 5px;
}

img#image {
    width: 100%;
}

a.link-contact {
    color: rgb(68, 67, 67);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a.link-contact:hover {
    color: black;
    text-decoration: none;
}
</style>