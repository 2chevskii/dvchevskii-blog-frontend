<script setup lang="ts">
import {apiClient} from "../../../api";
import {useRoute} from "vue-router";
import {Marked} from 'marked'
import {markedHighlight} from 'marked-highlight'
import {codeToHtml} from 'shiki'

const route = useRoute();
const {data: postData} = await apiClient.get(`/posts/${route.params.id}`)
const marked = new Marked(
  markedHighlight(
    {
      emptyLangClass: 'shiki',
      langPrefix: 'shiki language-',
      async highlight(code, lang, info) {
        const language = lang || 'plaintext'
        return codeToHtml(code, {
          lang: language,
          theme: 'vitesse-dark',
        })
      },
      async: true
    }
  )
)
const postBody = await marked.parse(postData.body)

</script>

<template>
  <div class="py-6 px-10">
    <h1 class="text-4xl">{{ postData.title }}</h1>
    <hr class="my-4 border-muted-foreground/30 border-2">
    <h2 v-if="postData.tagline" class="text-xl text-muted-foreground mb-4">{{ postData.tagline }}</h2>
    <div class="markdown" v-html="postBody">
    </div>
  </div>
</template>
