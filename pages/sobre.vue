<template>
  <div>
    <Header></Header>
    <section id="about">
        <b-container fluid>
            <div class="content">
                <h1 class="text-center">Sobre a WS - Construtor</h1>
                <p>A WS - Construtor surgiu em setembro de 2020. Seu fundador Wellington César, 
                que é uma pessoa apaixonada por tecnologia, inovação e desenvolvimento de sites e 
                que ao perceber como usuário sites que entregavam pouca experiência de uso ao usuário, 
                lentidão no carregamento das páginas e pouco resultado para algumas empresas na divulgação de 
                seus produtos e serviços.</p>
                <p>Assim surgiu uma oportunidade de oferecer aos clientes sites, lojas virtuais, blogs e 
                sites de notícias (portais de notícias) com alto desempenho nas hospedagens existentes a 
                preços competitivos e justos.</p>
                <p>A prestação de serviços ocorre no levantamento das necessidades dos clientes que querem 
                além de ter um site, que é o endereço virtual próprio, ter uma excelente performance com preço 
                justo e resultados. Para alcançar esses resultados realizamos o trabalho de SEO para que seu site 
                sempre esteja bem posicionado em pesquisas do Google.</p>
                <h2 class="text-center">Missão</h2>
                <ul>
                    <li>Desenvolver sites institucionais, lojas virtuais, blogs e portais de notícias com ótima experiência do usuário 
                    e design moderno, seguindo as tendências que surgem a cada ano.</li>
                    <li>Buscar sempre a satisfação do cliente.</li>
                    <li>Entregar serviços de qualidade</li>
                </ul>
                <h2 class="text-center">Visão</h2>
                <ul>
                    <li>Ser uma empresa inovadora.</li>
                    <li>Oferecer o melhor em experiência do usuário e interfaces modernas.</li>
                </ul>
                <h2 class="text-center">Valores</h2>
                <ul>
                    <li>Transparência</li>
                    <li>Ética</li>
                    <li>Honestidade</li>
                    <li>Comprometimento</li>
                    <li>Respeito ao cliente e as leis vigentes</li>
                </ul>
            </div>
        </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
    head: {
        title: "Sobre a WS - Construtor"
    }
}
</script>

<style scoped>
section#about {
    background-image: linear-gradient(190deg, paleturquoise, white);
    padding: 8px;
}

div.content {
    text-align: justify;
    margin: 5px;
}
</style>