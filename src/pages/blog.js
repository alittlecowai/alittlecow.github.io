import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const { page } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../views/blog/${page}.md`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => {
            console.log(err);
            setPost('# Page Not Found');
          });
      })
      .catch(err => {
        console.log(err);
        setPost('# Page Not Found');
      });
  }, [page]);

  return <>
    {page === undefined && <>
      <h1>🐮 A Little Cow Blog</h1>
      <p>Below are the currently available blog pages. Click on the words to navigate to the respective pages.</p>
      <ul>
        <li><NavLink to="/blog/sample1" className="nav-link">Sample 1</NavLink></li>
        <li><NavLink to="/blog/sample2" className="nav-link">Sample 2</NavLink></li>
      </ul>
    </>}
    {page !== undefined && <Markdown remarkPlugins={[remarkGfm]}>{post}</Markdown>}
  </>
};

export default Blog;