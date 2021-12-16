<template>
  <div>
    <Header></Header>
    <section id="ecommerce">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Lojas Virtuais</h1>
                <b-row>
                    <b-col sm="6" md="6">
                        <img src="../images/ecommerce.jpg" alt="Imagem de loja virtual da WS - Construtor" id="image">
                    </b-col>
                    <b-col sm="6" md="6">
                        <p>Uma loja virtual nada mais é do que um site direcionado para a venda de produtos e/ou serviços na Internet. 
                        Tipo de site que ganhou muito sucesso nos últimos anos e fez com que as empresas tivessem um aumento exponencial 
                        de faturamento, comparado a loja física. Essa tendência aumentou ainda mais com a pandemia do novo Coronavírus (Covid-19), 
                        o que acabou provocando a mudança de comportamento dos consumidores de forma ainda mais acelerada, que não tem mais 
                        medo de realizar compras na Internet por meio de um celular, tablet e/ou notebook, fazendo com que as empresas tenham 
                        que se adaptar para se manterem vivo no mercado.</p>
                        <p>Nós da WS - Construtor desenvolvemos sua loja virtual utilizando o WordPress, que é um sistema de gerenciamento de conteúdos 
                        mais utilizados atualmente e que reprenta uma porcentagem alta de sites desenvolvidos por ela, e o WooCommerce, que 
                        nada mais é do que um plugin do WordPress utilizado para acrescentar as funcionalidades de desenvolvimento de uma loja e é em 
                        conjunto com o WordPress que você pode gerenciar a sua loja realizando promoções, fornecendo cupons promocionais, cadastramento 
                        dos produtos.</p>
                        <p>O desenvolvimento da loja virtual realizado pela WS - Construtor também é feito por meio de levantamento de requisitos para 
                        entendermos a necessidade do cliente para a prototipação das interfaces, criação da identidade visual e o desenvolvimento propriamente dito, 
                        seguindo as tendências de design e layouts modernos e de acordo com o mercado.</p>
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
        title: "Lojas Virtuais - WS - Construtor"
    }
}
</script>

<style scoped>
section#ecommerce {
    background-image: linear-gradient(190deg, paleturquoise, white);
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