import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
         {posts && posts.map((post) => (
        <Article key={post.id} 
        title = {post.title} 
        preview = {post.preview} 
        date={`${post.date} - ${post.minutes} minutes`}
        />
         ))}
    </main>
  );
};

export default ArticleList