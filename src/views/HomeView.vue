<script setup lang="ts">
import {computed, ref} from 'vue'
import {codeToHtml} from 'shiki'

const targetText = `public static class Dvchevskii {
    public const string Name = "Roman";
    public const int Age = 24;
    public const string Role = "Developer";
    public const string Occupation = "Skillaz";

    public void Work() {}
}`

const displayText = ref('')
const highlightedCode = ref('')

let currentCharPos = 0;

let interval = setInterval(() => {
  displayText.value += targetText[currentCharPos++];

  if (currentCharPos >= targetText.length) {
    clearInterval(interval)
  }

  codeToHtml(displayText.value, {
    theme: 'dark-plus',
    lang: 'csharp',
  }).then(html => highlightedCode.value = html)
}, 60)


</script>

<template>
  <div class="mt-12 ml-12 w-fit">
    <pre v-html="highlightedCode"></pre>
  </div>
</template>

<style scoped>

</style>
