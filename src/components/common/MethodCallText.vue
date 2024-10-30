<script setup lang="ts">
const props = defineProps(['parts'])

const methodCallTextParts = [];

for (let i = 0; i < props.parts.length; i += 1) {
  methodCallTextParts.push(
    {
      text: '.',
      type: 'punctuation'
    },
    {
      text: props.parts[i],
      type: 'member'
    }
  )

  if (i === props.parts.length - 1) {
    methodCallTextParts.push({
      text: '()',
      type: 'punctuation'
    })
  }
}
</script>

<template>
  <section class="inline method-call-text">
    <span v-for="(part, i) in methodCallTextParts" :key="i" :class="part.type">{{ part.text }}</span>
  </section>
</template>

<style scoped>
/*noinspection CssUnusedSymbol*/
.method-call-text:hover .member {
  @apply underline;
}

.punctuation {
  @apply text-muted-foreground;
}
</style>
