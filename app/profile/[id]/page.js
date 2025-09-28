"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = () => {
  const params = useSearchParams();
  const userId = params.id;

  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await fetch(`/api/users/${userId}/posts`);
      const data = await response.json();

      setUserPosts(data);
      setUser(data[0]?.creator); // grab user info from first post
    };

    if (userId) fetchUserPosts();
  }, [userId]);

  return (
    <Profile
      name={user?.username}
      desc={`Welcome to ${user?.username}'s profile page. Explore their prompts and creative work.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
