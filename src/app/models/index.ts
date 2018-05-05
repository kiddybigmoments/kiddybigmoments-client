export interface Photo {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
  modified_at: string;
}

export interface Kid {
  id: number;
  mother: User;
  father: User;
  first_name: string;
  last_name: string;
}

export interface User {
  username: string;
}

export interface ApiResponse<T> {
  count: number;
  next?: any;
  previous?: any;
  results: [T];
}
