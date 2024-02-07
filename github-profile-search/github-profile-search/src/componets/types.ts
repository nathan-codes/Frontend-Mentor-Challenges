export interface ProfileInfo {
  login: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}
