export interface CreatePostRequest {
  title: string
  tagline: string | null
  body: string
  isPublished: boolean
}
