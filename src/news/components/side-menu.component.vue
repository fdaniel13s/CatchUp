<script>
import {NewsApiService} from "../services/news-api.service.js";
import PvSidebar from "../../main.js";

export default {
  name: "side-menu",
  components: {PvSidebar},
  props:{visible:Boolean},
  data(){
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created(){
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources;
          // Modificamos cada source que llega
          this.sources.forEach(source => source.urlToLogo = this.newsApi.getUrlToLogo(source.id));
          console.log(`data: ${response.data.sources}`)
        })
  },
  methods:{
    onSourceSelected(source){
      this.$emit('source-selected', source);
    },
    isAvailable(){
      return this.isAvailable();
    }
  }
}
</script>

<template>
  <pv-sidebar v-bind:visible = 'visible'>
    <div v-for="source in sources" v-on:source-selected="onSourceSelected(source)">
      <div class="flex align-content-start flex-wrap">
        <span class="flex align-items-center justify-content-center mr-2">
          <pv-avatar :aria-label="source.name" :image="source.urlToLogo" shape="circle"/>
          </span>
      </div>
      </div>
  </pv-sidebar>


</template>

