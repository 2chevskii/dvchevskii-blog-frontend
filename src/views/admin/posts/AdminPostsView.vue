<script setup lang="ts">
import UrlBuilder from "../../../api/UrlBuilder.ts";

const builder = new UrlBuilder()
  .appendPath('admin', 'posts', 'new')
  .appendQueryParameter('title', 'Some title')
  .appendQueryParameter('description', 'Some description')
  .appendQueryParameter('tags', 'tag 1', 'tag2');

console.log(builder.build());
</script>

<template>
  <div class="flex justify-center mt-12">
    <table>
      <thead>
      <tr>
        <th>
          ID
        </th>

        <th>
          Title
        </th>

        <th>
          Created at
        </th>

        <th>
          Updated at
        </th>

        <th>
          Deleted at
        </th>

        <th>
          Is draft
        </th>

        <th>
          Is deleted
        </th>
      </tr>
      </thead>

      <tbody>
      <tr>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th {
  @apply bg-card;
}

td, th {
  @apply p-2 border border-muted text-center;
}

tbody > tr:hover > td {
  @apply bg-muted-foreground/10;
}
</style>
