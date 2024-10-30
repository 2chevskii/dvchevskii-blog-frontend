import {defineStore} from 'pinia'
import {ref, reactive} from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = reactive<{
    userId: number,
    username: string | null,
    isAdmin: boolean,
  }>({
    userId: 0,
    username: null,
    isAdmin: false,
  })

  function loggedOut() {
    isAuthenticated.value = false
    user.userId = 0;
    user.username = null
    user.isAdmin = false
  }

  function loggedIn(userId: number, username: string, isAdmin: boolean) {
    isAuthenticated.value = true
    user.userId = userId
    user.username = username
    user.isAdmin = isAdmin
  }

  return {
    isAuthenticated,
    user,
    loggedOut,
    loggedIn,
  }
})
