<script>
import{NewsApiService} from "./news/services/news-api.service";
import{Article} from "./news/model/article.entity.js";
import SideMenu from "./news/components/side-menu.component.vue";
import ArticleList from "./news/components/article-list.component.vue";
import UnavailableContent from "./news/components/unavailable-content.component.vue";
import LanguageSwitcher from "./public/componenets/language-switcher.component.vue";
import FooterContent from "./public/componenets/footer-content.component.vue";

export default {
  name: "app",
  components: {FooterContent, LanguageSwitcher, UnavailableContent, ArticleList, SideMenu},
  data(){
    return {
      sidebarVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created(){
    this.getArticleForSource('bbc-news')
  },
  methods:{
    //Construir lista de articulos de response data
    buildArticleListFromResponseData(articles) {
      return articles.map(article => new Article(
          article.title
          , article.description
          , article.url
          , article.urlToImage
          , article.source));
    },
    getArticleForSource(sourceId){
      this.newsApi.getArticlesForSource(sourceId)
          .then(response => {
            let articles = this.buildArticleListFromResponseData(response.data.articles);
            this.articles = this.buildArticleListFromResponseData(articles);
            console.log(response.data.articles);
          }).catch(e => this.errors.push(e))
    },

    getArticlesForSourceWithLogo(source){
      this.newsApi.getArticles(source.id)
          .then(response => {
            let articles = this.buildArticleListFromResponseData(response.data.articles);
            this.articles = this.buildArticleListFromResponseData(articles);
            this.articles.forEach(article => article.source.urlToLogo = source.urlToLogo);
            console.log(response.data.articles);
          }).catch(e => this.errors.push(e))
    },

    //Toogle Sidebar
    toggleSidebar(){
      this.sidebarVisible = !this.sidebarVisible;
    },
    //Source Selected
    setSource(source){
      this.getArticlesForSourceWithLogo(source);
      this.toggleSidebar();
    }
  }
}
</script>

<template>

  <div class="w-full">
    <!--En este div se muestra el contenido de la pagina-->
    <div>
      <pv-menu-bar class="sticky bg-primary">
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleSidebar()"/>
          <side-menu v-model:visible="sidebarVisible" v-on:source-selected="setSource"/>
        </template>
        <template #end>
          <language-switcher/>
          </template>
      </pv-menu-bar>
    </div>
  </div>

  <div>
    <article-list v-if="errors" :articles="articles"/>
    <unavailable-content v-else :errors="errors"/>
  </div>

  <footer-content/>
</template>


