<script setup lang="tsx">
import MethodCallText from "../components/common/MethodCallText.vue";
import {apiClient} from "../api";
import {PostDto} from "../api/content/posts/PostDto.ts";
import {reactive, onMounted, watch} from "vue";

const postList = reactive<PostDto[]>([]);

onMounted(async () => {
  await apiClient.get('/posts?includeDrafts=true')
    .then(x => {
      console.log('post list response', x)
      return x.data
    })
    .then(x => {
      postList.length = 0;
      postList.push(...x)
    })
})

watch(postList, () => {
  console.log('Post list changed', postList)
})

const mockPosts = [
  {
    id: 1,
    title: 'Some mock post',
    tagline: 'Some mock tagline which can be quite long if you come to think of it',
    lastModifiedAtUtc: new Date('02.10.2024')
  },
  {
    id: 2,
    title: 'Some mock post without tagline',
    tagline: null,
    lastModifiedAtUtc: new Date('03.10.2024')
  }
];

function formatDateString(dateString: string) {
  const localeDateString = new Date(dateString).toLocaleDateString('ru-RU')
  const stringParts = localeDateString.split('.')
  return <span>
    {
      stringParts.map((part, i) => {
        if (i !== stringParts.length - 1) {
          return (<span>
        <span class="text-green-200">{part}</span>
        <span>.</span>
      </span>)
        } else {
          return (<span class="text-green-200">{part}</span>)
        }
      })
    }
  </span>
}
</script>

<template>
  <div class="flex h-screen">
    <nav class="bg-card p-4">
      <span class="text-muted-foreground">[</span>
      <ul class="ml-4">
        <li v-for="post in postList" :key="post.id">
          <router-link :to="`/posts/${post.id}`">
            <div><span class="text-blue-500">new</span> <span class="text-green-500">Post</span><span
              class="text-muted-foreground">(</span></div>
            <div class="ml-4">
              <div><span class="text-blue-300">title: </span><span class="text-amber-600">"{{ post.title }}"</span><span
                class="text-muted-foreground">,</span></div>
              <div>
                <span class="text-blue-300">tagline: </span><span class="text-amber-600" v-if="post.tagline">"{{
                  post.tagline
                }}"</span><span v-else class="text-blue-500">null</span><span class="text-muted-foreground">,</span>
              </div>
              <div><span class="text-blue-300">updatedAt: </span>
                <component :is="formatDateString(post.modifiedAtUtc)"/>
              </div>
            </div>
            <span class="text-muted-foreground">),</span>
          </router-link>
        </li>
      </ul>
      <span class="text-muted-foreground">]</span>
    </nav>
    <div class="grow h-screen overflow-scroll">
      <router-view v-slot="{Component}" :key="$route.fullPath">
        <suspense>
          <component :is="Component" v-if="Component"/>
          <div v-else class="flex justify-center items-center h-56">
            <span class="text-muted-foreground/30">Post not selected</span>
          </div>
        </suspense>
      </router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
