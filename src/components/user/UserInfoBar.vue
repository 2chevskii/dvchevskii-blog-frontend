<script setup lang="ts">
import {ChevronsLeftIcon} from 'lucide-vue-next';
import {useAuthStore} from "../../stores/auth.ts";
import {useApiClient} from "../../api";

const authStore = useAuthStore();

async function onLogoutClick() {
  const apiClient = useApiClient();

  await apiClient.auth.signOut();
  authStore.loggedOut();
}
</script>

<template>
  <div class="p-4 bg-muted rounded w-11/12">
    <div v-if="authStore.isAuthenticated" class="flex flex-col items-stretch justify-start gap-2">
      <div class="text-muted-foreground">
        <span>@</span><span>{{ authStore.user.username }}</span>
      </div>

      <button class="p-2 bg-primary/20 text-primary hover:bg-primary/30 block rounded" @click="onLogoutClick">
        <span>Logout</span>
      </button>
    </div>
    <div v-else class="flex flex-col items-stretch justify-start gap-2">
      <button class="p-2 bg-primary/20 text-primary hover:bg-primary/30 block rounded"
              @click="$router.push('/auth/signin')">
        <span>signin()</span>
      </button>
      <button class="p-2 bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 block rounded"
              @click="$router.push('/auth/signup')">
        <span>signup()</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
