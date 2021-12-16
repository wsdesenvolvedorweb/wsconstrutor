<template>
  <div>
    <Header></Header>
    <section id="sites">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Sites Institucionais</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/dispositivos.jpg" alt="Imagens de Sites Institucionais - WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Site institucional é um tipo de site feito para profissionais liberais e empresas que 
                        necessitam divulgar seus produtos e/ou serviços, mas que não utiliza de forma exclusiva para 
                        vendas, mas sim para realizar a divulgação dos mesmos e contato entre seus clientes e fornecedores.</p>
                        <p>Nós da WS - Construtor realizamos o desenvolvimento do seu site a partir de um levantamento de 
                        requisitos para entender suas necessidades e a partir dessa etapa é realizado o processo de criação da 
                        identidade visual e prototipação do site no Figma e, após a aprovação do cliente, é iniciado o processo de 
                        desenvolvimento do mesmo utilizando as tecnologias modernas existentes, design e layout modernos
                        utilizando a abordagem de geração de sites 
                        estáticos, em que são gerados no processo de produção (também conhecido como o deploy) os arquivos 
                        estáticos em HTML5, CSS3 e JavaScript para serem hospedados em qualquer serviço de hospedagem existente no 
                        mercado, trazendo um site com carregamento rápido e instantâneo, característica essa oriunda de uma Single 
                        Page Application (SPA). Esse é um dos vários critérios que o 
                        Google leva em consideração para ranquear o seu site nas pesquisas realizadas pelos usuários.</p>
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
        title: "Sites Institucionais - WS - Construtor"
    }
}
</script>

<style scoped>
section#sites {
    background-image: linear-gradient(190deg, white, paleturquoise);
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