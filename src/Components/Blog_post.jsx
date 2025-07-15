import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar } from "react-icons/ai";

function Blog_post() {
  const [posts, setPosts] = useState([]);
  const [expandedPostIds, setExpandedPostIds] = useState([]);

  useEffect(() => {
    fetch('https://api.slingacademy.com/v1/sample-data/blog-posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.blogs);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Toggle expanded state
  const toggleReadMore = (id) => {
    setExpandedPostIds((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  return (
    <div className=" flex flex-wrap  p-15 gap-5">
      <h1 className="text-2xl font-bold mb-4"></h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6   rounded-2xl shadow w-88">
          
          <img
            src={post.photo_url}
            alt={post.title}
            className="mt-2 w-full max-w-md rounded" 
          />
          <br /><br />
          <h2 className="text-xl font-semibold pl-4 p-2">{post.title}</h2>
          <p className="text-gray-700 pl-4 p-2">{post.description}</p> 

         {/* Read more content */}
          {expandedPostIds.includes(post.id) && (
            <div className="mt-2 text-gray-800">
              <p dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          )}
          <div className='flex items-center text-gray-500 mt-2 pl-4 p-2'>
            <AiOutlineCalendar />
            <p>Mar 16, 2023</p>
          </div>

          <button
            onClick={() => toggleReadMore(post.id)}
            className="mt-2 text-blue-600 hover:underline"
          >
            {expandedPostIds.includes(post.id) ? 'Read Less' : 'Read More'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Blog_post;


