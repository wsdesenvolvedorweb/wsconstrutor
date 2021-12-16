<template>
  <div>
    <Header></Header>
    <section id="portfolio-content">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Portfólio</h1>
                <p>Acompanhe aqui os últimos trabalhos realizados pela WS - Construtor:</p>
                <b-row>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/some_logo_dark.png"
                            img-alt="Logo da Divi Lover"
                            img-top
                        >
                            <b-card-text>A Divi Lover é um site de caráter fictício baseado em uma empresa norte-americana.</b-card-text>
                            <b-button variant="outline-info" class="btn-block" v-b-modal.modal-info-1>Clique aqui para saber mais</b-button>
                            <b-modal id="modal-info-1" scrollable title="Informação" size="xl" ok-only centered>
                                <div class="text-justify">
                                    <p>A Divi Lover é um site de caráter fictício baseado em uma empresa norte-americana. É um site institucional no qual oferece 
                                    serviços de design e marketing com layout ultra moderno que segue as tendências atuais de design.</p>
                                    <p>Para desenvolvimento desse site foi utilizado o WordPress e o tema Divi, tema este que é muito utilizado para desenvolvimento 
                                    de sites com o WordPress e que em sua versão paga oferece muitas possibilidades de customização, o que permite deixar o site com 
                                    uma identidade visual própria e moderna.</p>
                                </div>
                            </b-modal>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/aurora-Fashion.png"
                            img-alt="Logo da Aurora Fashion"
                            img-top
                        >
                            <b-card-text>A Aurora Fashion é uma loja virtual que vende pela Internet roupas femininas...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" v-b-modal.modal-info-2>Clique aqui para saber mais</b-button>
                            <b-modal id="modal-info-2" scrollable size="xl" title="Informação" ok-only centered>
                                <div class="text-justify">
                                    <p>A Aurora Fashion é uma loja virtual que vende pela Internet roupas femininas. 
                                    Esta loja é fictícia, na qual foi produzida com o objetivo de colocar em prática 
                                    novas formas de design responsivo e moderno de uma loja virtual, onde grande parte 
                                    das vendas de um produto são oriundas da Internet por meio de um e-commerce.</p>
                                    <p>Ferramentas utilizadas para o desenvolvimento dessa loja virtual foram o WordPress 
                                    e o WooCommerce, que nada mais é do que um plugin feito para o WordPress para implementação 
                                    de funcionalidades necessárias para se ter uma loja virtual, como cadastramento de produtos, 
                                    definição de preços, promoções, cupons de promoção e também foi utilizado para a confecção desse 
                                    site o plugin do pag seguro para a realização de pagamentos.</p>
                                </div>
                            </b-modal>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/logo-pestalozzi.jpg"
                            img-alt="Logo da Associação Pestalozzi de campinas"
                            img-top
                        >
                            <b-card-text>A Associação Pestalozzi de Campinas é uma instituição que cuida de pessoas com autismo e que realiza um grande trabalho...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" v-b-modal.modal-info-3>Clique aqui para saber mais</b-button>
                            <b-modal id="modal-info-3" scrollable size="xl" title="Informação" ok-only centered>
                                <div class="text-justify">
                                    <p>A Associação Pestalozzi de Campinas é uma instituição que cuida de pessoas com autismo e 
                                    que realiza um grande trabalho na cidade de Campinas. A instituição, para divulgar o grande 
                                    trabalho realizado, em meados de 2018 foi constatado a necessidade de se fazer um novo site 
                                    para a instituição, na qual foi constatada que o mesmo já existia, porém com um layout muito 
                                    simples e sem muito conteúdo atualizado para informar aos parceiros, pessoas interessadas em 
                                    ajudar a instituição e os órgãos públicos para saber mais sobre ela e ajudar também.</p>
                                    <p>Diante dessa necessidade levantada, foi feito o trabalho de levantamento de todas as 
                                    informações e busca por imagens para inserir nesse novo site. Dessa forma deu-se o início ao 
                                    processo de desenvolvimento do site, onde a primeira etapa foi a busca de uma identidade 
                                    visual do mesmo, com utilização de cores que transmitissem uma identidade. Foi feito também a 
                                    prototipação do mesmo para aplicar a versão final.</p>
                                    <p>Com esse novo site desenvolvido para a Associação Pestalozzi de Campinas, a instituição passou 
                                    a ter informações mais atualizadas e um design mais moderno, seguindo as tendências atuais de 
                                    desenvolvimento, trazendo mais visitas e arrecadando doações maiores.</p>
                                    <p>As tecnologias utilizadas para a confecção desse site foram: HTML5, CSS3, JavaScript e PHP7.</p>
                                </div>
                            </b-modal>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/detalhe-topo.png"
                            img-alt="Logo do Notícias Cidade"
                            img-top
                        >
                            <b-card-text>O site Notícias Cidade é um site de notícias...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" v-b-modal.modal-info-4 ok-only>Clique aqui para saber mais</b-button>
                            <b-modal scrollable size="xl" title="Informação" id="modal-info-4" centered ok-only>
                                <div class="text-justify">
                                    <p>O site Notícias Cidade é um site de notícias de caráter fictício, que foi desenvolvido para aprimoramento 
                                    de conhecimentos referentes a desenvolvimento de um site, adotando um layout e design moderno que agrada ao ser 
                                    visualizado.</p>
                                    <p>Este portal de notícias foi desenvolvido utilizando a abordagem de desenvolvimento chamada Headless, em que o 
                                    gerenciamento de conteúdos é completamente desacoplado da interface, fazendo com que as responsabilidades do portal 
                                    sejam divididas, facilitando uma futura manutenção.</p>
                                    <p>Para realizar esse desacoplamento do gerenciamento de conteúdos da interface, foi utilizada a API do WordPress 
                                    para fazer o gerenciamento das notícias cadastradas, fazendo com que o mesmo tenha a sua verdadeira função como um 
                                    sistema de gerenciamento de conteúdos.</p>
                                    <p>Tecnologias utilizadas para o desenvolvimento desse portal de notícia: HTML5, CSS3, JavaScript, React.js, Next.js e 
                                    WordPress.</p>
                                </div>
                            </b-modal>
                        </b-card>
                    </b-col>
                    <b-col sm="6" md="3">
                        <b-card
                            img-src="../images/code_blog.png"
                            img-alt="Imagem da Code Blog"
                            img-top
                        >
                            <b-card-text>O CodeBlog é um blog fictício que discute assuntos referentes à Tecnologia da Informação (TI)...</b-card-text>
                            <b-button variant="outline-info" class="btn-block" v-b-modal.modal-info-5>Clique aqui para saber mais</b-button>
                            <b-modal scrollable size="xl" title="Informação" id="modal-info-5" ok-only centered>
                                <div class="text-justify">
                                    <p>O CodeBlog é um blog fictício que discute assuntos referentes à Tecnologia da Informação (TI), mais 
                                    especificamente a área de programação web, discutindo assuntos como: HTML5, CSS3, JavaScript e outros tópicos 
                                    relacionados.</p>
                                    <p>Este blog foi construído como aprimoramento de conhecimentos referentes a desenvolvimento de sites utilizando 
                                    a abordagem de geração estática de sites e a abordagem de gerenciamento de conteúdos chamada de headless, sendo que 
                                    o gerenciador de conteúdos utilizado foi o Netlify CMS e a interface foi desenvolvida com React.js utilizando o Framework 
                                    Gatsby para fazer a geração estática do site.</p>
                                    <p>Tecnologias utilizadas para o desenvolvimento do blog: HTML5, CSS3, JavaScript, 
                                    React.js, Gatsby e Netlify CMS.</p>
                                </div>
                            </b-modal>
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
export default {
    head: {
        title: "Portfólio - WS - Construtor"
    }
}
</script>

<style scoped>
section#portfolio-content {
    padding: 8px;
}

div.content {
    text-align: justify;
    margin: 5px;
}
</style>