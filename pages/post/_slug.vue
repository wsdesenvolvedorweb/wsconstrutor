<template>
  <div>
    <Header></Header>
    <section id="post">
      <b-container fluid>
        <div class="content">
          <h1 class="text-center">{{post.title.rendered}}</h1>
          <div class="mt-3">
            <img :src="`${post.better_featured_image.source_url}`" :alt="`${post.better_featured_image.alt_text}`" id="image-post">
            <div class="mt-4">
              <div v-html="`${post.content.rendered}`"></div>
            </div>
          </div>
          <div id="comments">
            <h1 class="text-center">Deixe aqui o seu comentário</h1>
            <client-only>
              <Disqus></Disqus>
            </client-only>
          </div>
        </div>
      </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      post: {}
    }
  },
  head() {
    return {
      title: `${this.post.title.rendered} - WS - FormaSites`
    }
  },
  async asyncData({ params }) {
    return await axios.get(`http://localhost/blog-wsconstrutor/wordpress/wp-json/wp/v2/posts/${params.id}`).then((response) => {
      console.log(response.data)
      return {
        post: response.data
      }
    }).catch((error) => {
      return this.$toast.error("Erro ao carregar o conteúdo do post!", error)
    })
  }
}
</script>

<style scoped>
section#post {
  padding: 8px;
}
div.content {
  padding-left: 5px;
  text-align: justify;
}

div#tags {
  font-size: 25px;
}

div#comments {
  margin-top: 8px;
}

img#image-post {
  width: 100%;
}

@media screen and (min-width: 576px) {
  div#tags ul.list-unstyled {
    text-align: center;
  }
}

@media screen and (max-width: 575px) {
  div#tags {
    font-size: 22px;
  }

  div#tags ul.list-unstyled {
    text-align: center;
  }
}

@media screen and (min-width: 768px) {
  div#tags ul.list-unstyled {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  
}
</style>