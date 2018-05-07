export interface Photo {
  id: number
  name: string
  title: string
  description: string
  image: string
  created_at: string
  modified_at: string
}

export interface Kid {
  first_name: string
  user_id: number
}

export interface User {
  username: string
  password2: string
  password1: string
  first_name: string
  last_name: string
  email: string
}

export interface ApiResponse<T> {
  count: number
  next?: any
  previous?: any
  results: [T]
}
