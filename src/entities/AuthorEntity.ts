interface AuthorEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: Record<string, string>;
  phone: string;
  website: string;
  company: Record<string, string>;
}

export { AuthorEntity };
