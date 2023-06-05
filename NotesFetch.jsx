#Gate Notes PDF old papers


import React, { useEffect, useState } from 'react';

const ExamResources = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // GitHub API request configuration
    const username = 'YOUR_GITHUB_USERNAME';
    const repo = 'YOUR_GITHUB_REPO';
    const path = 'PATH_TO_EXAM_RESOURCES_FOLDER';
    const accessToken = 'YOUR_GITHUB_ACCESS_TOKEN';

    const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredFiles = data.filter(
          (file) => file.type === 'file' && (file.name.endsWith('.pdf') || file.name.endsWith('.doc'))
        );
        setFiles(filteredFiles);
      })
      .catch((error) => {
        console.error('Error fetching exam resources:', error);
      });
  }, []);

  return (
    <div>
      <h1>Exam Resources</h1>
      <ul>
        {files.map((file) => (
          <li key={file.sha}>
            <a href={file.download_url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamResources;
