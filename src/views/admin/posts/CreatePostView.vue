<script setup lang="ts">
import {ref} from 'vue'
import {MdEditor} from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type {AxiosError} from "axios";
import {apiClient} from '../../../api'
import {PostDto} from "../../../api/content/posts/PostDto.ts";

const editorContent = ref('# New post')
const title = ref('New post')
const tagline = ref('')
const isDraft = ref(true)
const headerImageId = ref(null)

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await apiClient.post('/images', formData)
  headerImageId.value = response.data.id
  console.log('Image uploaded', response.data)
}

async function onCreatePostClick() {
  try {
    const postDto: Partial<PostDto> = {
      title: title.value,
      tagline: tagline.value || null,
      isDraft: isDraft.value,
      body: editorContent.value,
      headerImageId: headerImageId.value,
    }
    const response = await apiClient.post('/posts', postDto)
    console.log('Create post returned:', response.data)
  } catch (e: AxiosError) {
    console.error(e)
  }
}


</script>

<template>
  <div class="w-11/12 mx-auto mt-12">
    <h1>Create post</h1>

    <div class="flex flex-col gap-2">
      <label for="">
        <span>Title</span>
        <input type="text" v-model="title">
      </label>

      <label for="">
        <span>Tagline</span>
        <input type="text" v-model="tagline">
      </label>

      <label for="">
        <span>Mark as draft</span>
        <input type="checkbox" v-model="isDraft">
      </label>

      <label for="">
        <span>Header image (image id: {{ headerImageId }})</span>
        <input type="file" @change="async e => await uploadImage(e.target.files[0])">
      </label>
    </div>

    <MdEditor v-model="editorContent" theme="dark" language="en"/>

    <button @click="onCreatePostClick" class="p-2 rounded bg-primary mt-2">Create post</button>
  </div>
</template>

<style scoped>

</style>
