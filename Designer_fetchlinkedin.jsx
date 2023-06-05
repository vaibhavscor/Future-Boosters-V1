import React, { useEffect, useState } from 'react';

const LinkedInUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // LinkedIn API request configuration
    const params = {
      keywords: 'Senior UI Designer OR Senior UX Designer',
      projection: '(id,firstName,lastName,headline)',
    };

    // LinkedIn API request
    fetch('https://api.linkedin.com/v2/people', {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.elements && data.elements.length > 0) {
          setUsers(data.elements);
        }
      })
      .catch((error) => {
        console.error('Error fetching LinkedIn users:', error);
      });
  }, []);

  return (
    <div>
      <h1>LinkedIn Users - Senior UI/UX Designers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {`${user.firstName} ${user.lastName}`}</p>
            <p>Headline: {user.headline}</p>
          </li>
       
