<script setup>
import {Article} from "../model/article.entity.js";
import PvCard from "../../main.js";
import PvAvatar from "../../main.js";

export default {
  name: 'ArticleCard',
  props: {article:Article}
}

</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <img :alt = "article.title" :src="article.urlToImage">
    </template>
    <template #title>
      <p>{{article.title}}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap">
      <span class="flex align-items-center justify-content-center mr-2">
        <pv-avatar :aria-label="article.source.name" :image="article.source.urlToLogo" shape="circle"/>
      </span>
        <span class="flex align-items-center justify-content-center">
        <p>{{article.source.name}}</p>
      </span>
      </p>
    </template>

  </pv-card>
</template>

