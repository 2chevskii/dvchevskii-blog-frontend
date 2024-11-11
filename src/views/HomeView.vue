<script setup lang="ts">
import {computed, ref} from 'vue';
import {codeToHtml} from 'shiki';

const targetText = `public static partial class Dvchevskii {
    public const string Name = "Roman";
    public const int Age = 24;
    public const string Role = "Developer";
    public const string Occupation = "Skillaz";

    public static partial void Work(WorkTask[] tasks, IDE ide, WebBrowser browser);

    public static string GetNotice() {
      return @"
        This blog is under construction.
        Basically, only the core mechanisms are in place,
        I am still in active search of inspiration for features and
        aesthetics, so many things will change along the way =)
      ";
    }
}`;

const displayText = ref('');
const highlightedCode = ref('');

let currentCharPos = 0;

let interval = setInterval(() => {
  displayText.value += targetText[currentCharPos++];

  if (currentCharPos >= targetText.length) {
    clearInterval(interval);
  }

  codeToHtml(displayText.value, {
    theme: 'dark-plus',
    lang: 'csharp',
  }).then(html => highlightedCode.value = html);
}, 20);


</script>

<template>
  <div class="mt-12 ml-12 w-fit">
    <pre v-html="highlightedCode"></pre>
  </div>
</template>

<style scoped>

</style>
