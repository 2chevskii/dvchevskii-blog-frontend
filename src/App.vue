<script setup lang="ts">
import MethodCallText from "./components/common/MethodCallText.vue";
import {useAuthStore} from './stores/auth';
import ExternalLink from "./components/common/ExternalLink.vue";
import {Github as GithubIcon, Twitter as TwitterIcon, YoutubeIcon} from 'lucide-vue-next';
import UserInfoBar from "./components/user/UserInfoBar.vue";

const authStore = useAuthStore();

</script>

<template>
  <div id="app-wrapper">
    <div id="layout-wrapper" class="flex">
      <header class="bg-card h-screen flex flex-col justify-between items-center py-2">
        <div class="px-4 py-2">
          <h1 class="mb-2">
            <router-link to="/" id="router-link-root">
              <span class="text-blue-400">global</span>
              <span class="text-muted-foreground">::</span>
              <span>_2chevskii</span>
              <span class="text-muted-foreground">.</span>
              <span id="word-blog">Blog</span>
            </router-link>
          </h1>

          <nav>
            <ul>
              <li>
                <router-link to="/posts">
                  <MethodCallText :parts="['Posts']"/>
                </router-link>
              </li>
              <li>
                <router-link to="/about">
                  <MethodCallText :parts="['About']"/>
                </router-link>
              </li>
            </ul>

            <template v-if="authStore.user.isAdmin">
              <h5 class="text-sm text-muted-foreground font-bold my-2">Administrative tools</h5>
              <ul>
                <li>
                  <router-link to="/admin/posts">
                    <MethodCallText :parts="['Admin', 'Posts']"/>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/posts/create">
                    <MethodCallText :parts="['Admin', 'Posts', 'Create']"/>
                  </router-link>
                </li>
                <li>
                  <router-link to="/admin/users">
                    <MethodCallText :parts="['Admin', 'Users']"/>
                  </router-link>
                </li>
              </ul>
            </template>

            <h5 class="text-sm text-muted-foreground font-bold my-2">External links</h5>
            <ul>
              <li>
                <ExternalLink href="https://github.com/2chevskii">
                  <template #icon>
                    <GithubIcon class="inline text-white/70" :size="16"/>
                  </template>

                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://x.com/only_love1488">
                  <template #icon>
                    <TwitterIcon class="inline text-blue-500" :size="16"/>
                  </template>

                  Twitter
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://x.com/only_love1488">
                  <template #icon>
                    <YoutubeIcon class="inline text-red-500" :size="16"/>
                  </template>

                  YouTube
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </div>
        <UserInfoBar/>
      </header>
      <main id="app-router" class="w-full">
        <router-view/>
      </main>
    </div>

  </div>
</template>

<style scoped>

</style>
