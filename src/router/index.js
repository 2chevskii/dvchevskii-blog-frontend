import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import SignInForm from "../components/auth/SignInForm.vue";
import SignUpForm from "../components/auth/SignUpForm.vue";
import PostsView from '../views/PostsView.vue'
import Post from "../components/content/posts/Post.vue";
import {useAuthStore} from '../stores/auth'
import CreatePostView from "../views/admin/posts/CreatePostView.vue";
import {useApiClient} from '../api'
import AdminPostsView from "../views/admin/posts/AdminPostsView.vue";
import AdminUsersView from "../views/admin/users/AdminUsersView.vue";

export const createApplicationRouter = () => {
  const router = createRouter({
    history: createWebHistory('/'), routes: [
      {
        path: '/', component: HomeView,
      },
      {
        path: '/auth/',
        component: AuthView,
        redirect: '/auth/signin',
        children: [
          {
            path: 'signin', component: SignInForm
          },
          {
            path: 'signup', component: SignUpForm
          }
        ]
      },
      {
        path: '/posts/',
        component: PostsView,
        children: [
          {
            path: ':id',
            component: Post
          }
        ]
      },
      {
        path: '/admin/posts/create',
        component: CreatePostView,
      },
      {
        path: '/admin/',
        children: [
          {
            path: 'posts',
            component: AdminPostsView,
          },
          {
            path: 'users',
            component: AdminUsersView,
          }
        ]
      }
    ]
  })

  router.afterEach(async () => {
    const api = useApiClient();
    const authState = await api.auth.getState()
    const authStore = useAuthStore()
    if (authState.userId) {
      authStore.loggedIn(authState.userId, authState.username, authState.isAdmin)
    } else {
      authStore.loggedOut()
    }
  })

  return router;
}
