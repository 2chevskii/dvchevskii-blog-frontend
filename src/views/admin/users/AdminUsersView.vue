<script setup lang="ts">
import {useApiClient} from "../../../api";
import {reactive} from "vue";
import {useAuthStore} from "../../../stores/auth.ts";

const authStore = useAuthStore();

const userList = reactive<Record<string, any>[]>([]);

const apiClient = useApiClient();

apiClient.admin.users.getAll().then(res => {
  userList.length = 0;
  userList.push(...res);

  const thisUser = userList.find(x => x.id === authStore.user.userId);
  thisUser!.isCurrentUser = true;
});
</script>

<template>
  <div class="flex flex-col items-center mt-12 gap-4">
    <h1>Users</h1>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Primary email</th>
        <th>Created at</th>
        <th>Is deleted</th>
        <th>Is admin</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in userList" :key="user.id" :data-is-current-user="user.isCurrentUser">
        <td>{{ user.id }}</td>
        <td>
          {{ user.username }}
          <span v-if="user.isCurrentUser" class="text-muted-foreground"> (You)</span>
        </td>
        <td>{{ user.primaryEmail }}</td>
        <td>{{ user.auditInfo.createdAtUtc }}</td>
        <td>
          <input type="checkbox" :checked="user.auditInfo.deletedAtUtc !== null" disabled>
        </td>
        <td>
          <input type="checkbox" :checked="user.isAdmin" disabled>
        </td>
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
