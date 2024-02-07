import React, { useEffect, useState } from "react";
import Header from "./componets/Header";
import ProfileCard from "./componets/ProfileCard";
import axios from "axios";


const BASE_URL = "https://api.github.com/users";
const DEFAULT_USERNAME = "red";

interface ProfileState {
  data: {
    avatar_url: string;
    login: string;
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
  },
  isLoading: boolean;
}

const App: React.FC = () => {
  const [username, setUsername] = useState("");

  const HandleUserSearch = (searchTerm) => {
    setUsername(searchTerm);
  };

  const [profile, setProfile] = useState<ProfileState>({
    data: {
      avatar_url: "",
      login: "",
      gravatar_id: "",
      url: "",
      repos_url: "",
      name: "",
      company: "",
      blog: "",
      location: "",
      bio: "",
      twitter_username: "",
      public_repos: 0,
      followers: 0,
      following: 0,
      created_at: "",
    },
    isLoading: true,
  });

  // App component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: profileResult.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData(); // Call the async function
  }, [username]);
  return (
    <div className="p-4 font-spaceMono max-w-screen-sm mx-auto">
      <Header search={HandleUserSearch} />
      <ProfileCard profileInfo={profile.data} />
    </div>
  );
};

export default App;
