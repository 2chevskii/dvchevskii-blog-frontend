<script setup lang="ts">
import {ref} from 'vue';
import {MdEditor} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type {AxiosError} from "axios";
import {useApiClient, apiClient as legacyApiClient} from '../../../api';
import {PostDto} from "../../../api/content/posts/PostDto.ts";

const apiClient = useApiClient();

const editorContent = ref('# New post');
const title = ref('New post');
const tagline = ref('');
const isDraft = ref(true);
const headerImageId = ref<number | null>(null);

async function uploadImage(file: File) {
  const imageDto = await apiClient.images.upload(file);
  headerImageId.value = imageDto.id;
  console.log('Image uploaded', imageDto);
}

async function onCreatePostClick() {
  try {
    const postDto: Partial<PostDto> = {
      title: title.value,
      tagline: tagline.value || null,
      isDraft: isDraft.value,
      body: editorContent.value,
      headerImageId: headerImageId.value,
    };
    const response = await legacyApiClient.post('/posts', postDto);
    console.log('Create post returned:', response.data);
  } catch (e: AxiosError) {
    console.error(e);
  }
}

const onUploadImg = async (files: File[], callback: (urls: string[]) => void) => {
  const urls = [] as string[];

  for (const file of files) {
    const imageDto = await apiClient.images.upload(file);
    const url = import.meta.env.VITE_API_BASE_URL + '/images/' + imageDto.id;
    urls.push(url);
  }

  console.log('Callback return', callback(urls));
};

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
        <input type="file" @change="async e => await uploadImage((e.target as HTMLInputElement).files![0])">
      </label>
    </div>

    <MdEditor v-model="editorContent" theme="dark" language="en" @onUploadImg="onUploadImg"/>

    <button @click="onCreatePostClick" class="p-2 rounded bg-primary mt-2">Create post</button>
  </div>
</template>

<style scoped>

</style>
