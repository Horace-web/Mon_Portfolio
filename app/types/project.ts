export interface Project {
  id: number
  title: string
  description: string
  year?: string | number
  image: string
  screenshots?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  deploy?: string
  featured?: boolean
  hasDetail?: boolean
  longDescription?: string
  context?: string
  features?: string[]
  architecture?: string[]
  status?: string
}
