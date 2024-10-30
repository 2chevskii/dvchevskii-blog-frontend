<script setup lang="ts">
import {useApiClient} from '../../api';
import {reactive} from "vue";
import {SignInWithLoginPasswordRequest} from "../../api/auth/AuthApiClient.ts";
import {useRouter} from "vue-router";

const formModel = reactive({login: '', password: ''});

const router = useRouter();

async function onFormSubmit() {
  try {
    const request: SignInWithLoginPasswordRequest = {
      login: formModel.login,
      password: formModel.password,
    };
    const apiClient = useApiClient();
    const response = await apiClient.auth.signIn(request);
    await router.push('/');
  } catch (e: any) {
    console.error(e);
  }
}
</script>

<template>
  <form class="flex flex-col items-center gap-4" @submit.prevent="onFormSubmit">
    <label for="usernameInput" class="form-control">
      <span>Login</span>
      <input
        type="text"
        id="usernameInput"
        name="username"
        autocomplete="off"
        v-model="formModel.login">
    </label>

    <label for="passwordInput" class="form-control">
      <span>Password</span>
      <input
        type="password"
        id="passwordInput"
        name="password"
        autocomplete="new-password"
        v-model="formModel.password">
    </label>

    <input class="hover:bg-primary/30 hover:text-accent/60 transition-colors py-2 px-4 rounded-lg" type="submit"
           value="SignIn()">
  </form>
</template>

<style scoped>
.form-control {
  @apply border border-muted-foreground/60 rounded-lg overflow-clip;
}

.form-control > span {
  @apply p-2 border-r border-muted-foreground/60 rounded-none inline-block bg-muted text-muted-foreground w-24;
}

.form-control > input {
  @apply h-full p-2 bg-transparent focus:outline-none font-mono;
}

input[type=submit] {
  @apply cursor-pointer;
}
</style>
