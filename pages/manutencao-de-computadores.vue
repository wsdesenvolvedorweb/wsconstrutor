<template>
  <div>
    <Header></Header>
    <section id="maintenance">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Manutenção de computadores</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/manutencao-computadores.jpg" alt="Imagem de manutenção de computadores da WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Hoje em dia passamos horas e horas a frente de um computador para trabalhar, divertir e consumir conteúdos diversos 
                        para manter-se bem informado, mas todo cuidado é pouco, existe ameaças que podem prejudicar o seu computador como vírus, 
                        malwares, ramsonwares e outras ameaças que existem no universo da Internet.</p>
                        <p>Nós da WS - Construtor trabalhamos com manutenção de computadores voltado para formatação de computadores, onde realizamos 
                        recuperação dos dados contidos no seu computador para que você não perca nenhuma informação importante e esteja sempre atualizado 
                        com sistema operacional moderno. A WS realiza também formatação de computadores sem a realização de backups, caso já tenha realizado.
                        </p>
                        <p>Com a formatação de computadores da WS - Construtor você ficará sempre protegido e atualizado para navegar na Internet, trabalhar 
                        em casa ou no escritório com mais segurança contra qualquer tipo de ameaça.</p>
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
        title: "Manutenção de computadores - WS - Construtor"
    }
}
</script>

<style scoped>
section#maintenance {
    background-image: linear-gradient(90deg, white, paleturquoise, rgb(75, 235, 235));
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