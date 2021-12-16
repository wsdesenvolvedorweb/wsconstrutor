<template>
  <div>
    <Header></Header>
    <section id="testimonials">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Depoimentos</h1>
                <p>Veja os depoimentos de nossos clientes sobre os serviços prestados pela WS - Construtor:</p>
                <b-row>
                    <b-col sm="6" md="6">
                        <div>
                            <b-img center src="../images/1543945471339.jpg" alt="Imagem do depoente falando sobre os serviços da WS - Construtor" thumbnail id="image"></b-img>
                        </div>
                    </b-col>
                    <b-col sm="6" md="6">
                        <blockquote class="text-right">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam odio, 
                        ultrices sit amet consectetur et, fringilla non diam. Nullam elementum turpis ex, 
                        quis finibus urna eleifend eget. Etiam ipsum mauris, euismod molestie consequat sed, 
                        ullamcorper non est. Vivamus viverra felis odio, volutpat lacinia est commodo et. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Vestibulum dignissim urna dolor, in pulvinar ante egestas non. 
                        Quisque rutrum lacus ac mi vulputate egestas. Nunc id velit neque. 
                        Curabitur lorem augue, cursus quis erat non, maximus bibendum dolor. 
                        Morbi tempor dignissim nulla. In dapibus pharetra vehicula. 
                        Aliquam erat volutpat. Quisque interdum, massa a lobortis finibus, dolor nunc elementum dui, 
                        quis condimentum diam nunc ut mauris. Duis fermentum elementum placerat. 
                        Duis vulputate metus nec dolor varius, eu fringilla tellus rhoncus. 
                        Morbi vel scelerisque risus."</blockquote>
                        <p><strong>Caio Santos</strong>, Corretor de seguros na casa do corretor.</p>
                    </b-col>
                    <b-col sm="6" md="6">
                        <blockquote class="text-right">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris diam odio, 
                        ultrices sit amet consectetur et, fringilla non diam. Nullam elementum turpis ex, 
                        quis finibus urna eleifend eget. Etiam ipsum mauris, euismod molestie consequat sed, 
                        ullamcorper non est. Vivamus viverra felis odio, volutpat lacinia est commodo et. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Vestibulum dignissim urna dolor, in pulvinar ante egestas non. 
                        Quisque rutrum lacus ac mi vulputate egestas. Nunc id velit neque. 
                        Curabitur lorem augue, cursus quis erat non, maximus bibendum dolor. 
                        Morbi tempor dignissim nulla. In dapibus pharetra vehicula. 
                        Aliquam erat volutpat. Quisque interdum, massa a lobortis finibus, dolor nunc elementum dui, 
                        quis condimentum diam nunc ut mauris. Duis fermentum elementum placerat. 
                        Duis vulputate metus nec dolor varius, eu fringilla tellus rhoncus. 
                        Morbi vel scelerisque risus."</blockquote>
                        <p><strong>Lorem Ipsum</strong>, Advogado.</p>
                    </b-col>
                    <b-col sm="6" md="6">
                        <b-img src="../images/seo.jpg" center alt="Imagem do depoente falando sobre os serviços da WS - Construtor" thumbnail="" id="image"></b-img>
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
        title: "Depoimentos - WS - Construtor"
    }
}
</script>

<style scoped>
section#testimonials {
    background-color: paleturquoise;
    padding: 8px;
}

div.content {
    margin: 5px;
    text-align: justify;
}

img#image {
    width: 30%;
}

blockquote.text-right {
    text-align: right;
}
</style>