export interface Project {
  id: number
  title: string
  description: string
  year?: string | number
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}