import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.blog))
      .catch((error) => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <div>
    <span className='flex items-center mt-32 justify-center'>Loading...</span></div>;

  return (
    <div className="max-w-2xl mx-auto">
      <br /><br /><br />
      <Link to="/" className="text-blue-600 hover:underline mb-7 flex items-center gap-2">&larr; <p>Back to Blog List</p></Link>
      <div className='shadow-lg p-6 bg-white rounded-lg mb-6 '>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className='flex items-center mb-4 gap-3'>
      <div className="text-gray-700"><strong>Author {post.user_id}</strong> </div>
      <div className="text-gray-700">{post.category}</div>
      </div>
      <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: post.content_text }} />{}
      </div>
    </div>
  );
}

export default BlogDetail;