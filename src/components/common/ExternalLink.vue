<script setup lang="ts">
import {ExternalLinkIcon} from 'lucide-vue-next'

defineProps(['href'])
</script>

<template>
  <a :href="href" target="_blank"
     class="flex items-center justify-between hover:bg-muted-foreground/30 p-2 rounded transition-colors cursor-pointer">
    <div class="flex gap-2 items-center">
      <slot name="icon"></slot>
      <slot></slot>
    </div>
    <ExternalLinkIcon class="inline text-muted-foreground" :size="16"/>
  </a>
</template>

<style scoped>

</style>
