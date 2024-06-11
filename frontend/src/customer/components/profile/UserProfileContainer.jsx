import React, { useEffect, useState } from 'react';

const UserProfile = ({ username, email, bio }) => {
  return (
    <div>
      <h2>{username}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

const UserProfileContainer = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    bio: ''
  });

  // Function to fetch user data (you might fetch this from an API)
  const fetchUserData = () => {
    // Simulating API call
    setTimeout(() => {
      setUser({
        username: 'example_user',
        email: 'example@example.com',
        bio: 'This is an example bio.'
      });
    }, 1000); // Simulate a 1 second delay
  };

  // Call the fetchUserData function when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user.username ? (
        <UserProfile username={user.username} email={user.email} bio={user.bio} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfileContainer;
